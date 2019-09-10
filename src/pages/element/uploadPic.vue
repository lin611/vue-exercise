<template>
  <div class="main">
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/"
               list-type="picture-card"
               :on-change="handleChange"
               :on-preview="handlePreview"
               :on-remove="handleRemove"
               :before-remove="beforeRemove"
               multiple
               :limit="10"
               :on-exceed="handleExceed"
               :file-list="fileList3">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList3: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/200'
        }],
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleChange(file, fileList) {
        console.log(file, fileList);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleExceed(files, fileList) {
        console.log(files, fileList);
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        console.log(file, fileList);
        return this.$confirm(`确定移除 ${file.name}？`);
      },
    }
  }
</script>
