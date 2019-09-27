<template>
  <script :id="id" :name="name" type="text/plain"></script>
</template>

<script>
  import API from '../../assets/js/api.js'
  import '../../../static/UEditor/ueditor.config.js'
  import '../../../static/UEditor/ueditor.all.js'

export default {
  name: 'UEditor',
  data () {
    return {
      id: 'editor' + Math.random().toString().slice(-10),
      editor: null,
      status: 0,
      initValue: '',
      defaultConfig: {
        enableAutoSave: false,
        autoHeightEnabled: false,
        initialFrameHeight: 550,
        // initialFrameWidth: '100%',
        // UEDITOR_HOME_URL: '/static/UEditor/',
      }
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default: function () {
        return {}
      }
    },
    init: {
      type: Function,
      default: function () {
        return () => {}
      }
    },
    destroy: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.customInit();
  },
  computed: {
    mixedConfig () {
      return Object.assign({}, this.defaultConfig, this.config)
    }
  },
  methods: {
    // 插入文本
    setEditorContent(txt) {
      this.editor.setContent(txt, true);
    },
    // 获取内容
    getEditorContent() {
      return this.editor.getContent();
    },
    // 获取文本
    getEditorContentTxt() {
      return this.editor.editor.getContentTxt();
    },
    // 添加自定义按钮
    registerButton: ({ name, icon, tip, handler, index, UE = window.UE }) => {
      UE.registerUI(name, (editor, name) => {
        editor.registerCommand(name, {
          execCommand: () => {
            handler(editor, name)
          }
        })
        const btn = new UE.ui.Button({
          name,
          title: tip,
          cssRules: `background-image: url(${icon}) !important;background-size: cover;`,
          onclick () {
            editor.execCommand(name)
          }
        })
        editor.addListener('selectionchange', () => {
          const state = editor.queryCommandState(name)
          if (state === -1) {
            btn.setDisabled(true)
            btn.setChecked(false)
          } else {
            btn.setDisabled(false)
            btn.setChecked(state)
          }
        })
        return btn
      }, index)
    },

    // 实例化编辑器
    initEditor () {
      this.$nextTick(() => {
        this.init()
        this.editor = window.UE.getEditor(this.id, this.mixedConfig)
        this.editor.addListener('ready', () => {
          this.status = 2
          this.editor.setContent(this.initValue)
          this.$emit('ready', this.editor)
          this.editor.addListener('contentChange', () => {
            this.$emit('input', this.editor.getContent())
          })
        })
      })
    },
    // 检测依赖,确保 UEditor 资源文件已加载完毕
    checkDependencies () {
      return new Promise((resolve, reject) => {
        let scriptsLoaded = !!window.UE && !!window.UEDITOR_CONFIG && Object.keys(window.UEDITOR_CONFIG).length !== 0 && !!window.UE.getEditor
        if (scriptsLoaded) {
          resolve()
        } else if (window['$loadEnv']) {
          window['$loadEnv'].on('scriptsLoaded', () => {
            resolve()
          })
        } else {
          this.loadConfig().then(() => this.loadCore()).then(() => {
            resolve()
            window['$loadEnv'].emit('scriptsLoaded')
          })
        }
      })
    },
    loadConfig () {
      return new Promise((resolve, reject) => {
        if (window.UE && window.UEDITOR_CONFIG && Object.keys(window.UEDITOR_CONFIG).length !== 0) {
          resolve()
          return
        }
        let configScript = document.createElement('script')
        configScript.type = 'text/javascript'
        configScript.src = this.mixedConfig.UEDITOR_HOME_URL + 'ueditor.config.js'
        document.getElementsByTagName('head')[0].appendChild(configScript)
        configScript.onload = function () {
          if (window.UE && window.UEDITOR_CONFIG && Object.keys(window.UEDITOR_CONFIG).length !== 0) {
            resolve()
          } else {
            console.error('加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n', configScript.src)
          }
        }
      })
    },
    loadCore () {
      return new Promise((resolve, reject) => {
        if (window.UE && window.UE.getEditor) {
          resolve()
          return
        }
        let coreScript = document.createElement('script')
        coreScript.type = 'text/javascript'
        coreScript.src = this.mixedConfig.UEDITOR_HOME_URL + 'ueditor.all.min.js'
        document.getElementsByTagName('head')[0].appendChild(coreScript)
        coreScript.onload = function () {
          if (window.UE && window.UE.getEditor) {
            resolve()
          } else {
            console.error('加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n', coreScript.src)
          }
        }
      })
    },
    // 设置内容
    setContent (value) {
      value === this.editor.getContent() || this.editor.setContent(value)
    },


    //编辑器自定义按钮
    customInit() {
      //单图上传
      this.registerButton({
        name: 'upimg',
        icon: '../../../static/UEditor/themes/default/images/icon-img.png',
        tip: '上传图片',
        handler: (editor, name) => {
          let input = document.createElement('input');
          input.id = "upImg";
          input.type = "file";
          input.style.display = 'none';
          document.body.appendChild(input);
          input.click();
          input.addEventListener('change', (e) => {
            let file = e.target.files[0];
            //上传
            let params = new FormData();
            params.append("image1", file);
            params.append("sourcePic", "image1");
            this.axios.post(API.common.uploadImg, params, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'token': sessionStorage.getItem('token')
              }
            }).then(response => {
              if (response.data.status === 0) {
                this.$message.success('上传成功！');
                let imgUrl = response.data.filePath;
                editor.execCommand('inserthtml', '<img src=' + imgUrl + '>') // 插入图片
              } else {
                this.$message.error(response.data.message)
              }
            }).catch(response => {
              console.log(response)
            });

          });
          document.body.removeChild(input); //销毁DOM

        }
      });
      //批量上传
      this.registerButton(
        {
          name: 'batchimg',
          icon: '../../../static/UEditor/themes/default/images/icon-batchImg.png',
          tip: '批量上传图片',
          handler: (editor, name) => {
            let input = document.createElement('input');
            input.id = "batchImg";
            input.type = "file";
            input.multiple = 'multiple '; //支持多选
            input.style.display = 'none';
            document.body.appendChild(input);
            input.click();
            input.addEventListener('change', (e) => {
              let files = e.target.files;
              //上传
              if (files.length > 10) {
                this.$message.error('抱歉，批量上传最多只支持10张图片');
                return
              }
              let params = new FormData();
              for (let i = 0; i < files.length; i++) {
                params.append("image1", files[i]);
              }
              params.append("sourcePic", "image1");
              this.axios.post(API.common.batchUploadImg, params, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'token': sessionStorage.getItem('token')
                }
              }).then(response => {
                if (response.data.status === 0) {
                  this.$message.success('上传成功！');
                  let imgList = response.data.imageList;
                  console.log(imgList);
                  for (let k = 0; k < imgList.length; k++) {
                    editor.execCommand('inserthtml', '<img src=' + imgList[k].filePath + '>') // 插入图片
                  }
                } else {
                  this.$message.error(response.data.message)
                }
              }).catch(response => {
                console.log(response)
              });


            });
            document.body.removeChild(input); //销毁DOM

          }
        }
      )
    },
  },

  beforeDestroy () {
    if (this.destroy && this.editor && this.editor.destroy) this.editor.destroy()
  },
  // 双向绑定
  watch: {
    value: {
      handler (value) {
        // 0: 尚未初始化 1: 开始初始化但尚未ready 2 初始化完成并已ready
        switch (this.status) {
          case 0:
            this.status = 1
            this.initValue = value
            this.checkDependencies().then(() => this.initEditor())
            break
          case 1:
            this.initValue = value
            break
          case 2:
            this.setContent(value)
            break
          default:
            break
        }
      },
      immediate: true
    }
  }
}
</script>
