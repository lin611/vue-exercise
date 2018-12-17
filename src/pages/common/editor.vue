<template>
  <div id="adAdd">
    <div class="main-panel">
      <el-form :model="addForm" ref="addForm" label-width="100px" class="ruleForm" >
        <el-form-item prop="remark">
          {{addForm.remark}}
          <UEditor ref="UEditor" v-model="addForm.remark"></UEditor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 116px;">提交</el-button>
          <el-button type="primary" style="width: 116px;" @click="setEditorContent('写入内容369')">写入内容</el-button>
          <el-button type="primary" style="width: 116px;" @click="getEditorContent">获取内容</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import UEditor from '../../components/UEditor/UEditor'

  export default {
    components: {
      UEditor
    },
    data() {
      return {
        addForm: {
          remark:'',
        },
      }
    },
    methods: {
      setEditorContent(txt) {
        this.$refs.UEditor.setEditorContent(txt);
      },
      getEditorContent() {
        this.$message.success(this.$refs.UEditor.getEditorContent());

      },
    },
    computed: {}
  }
</script>

