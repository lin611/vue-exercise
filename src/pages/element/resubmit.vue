<template>
  <div>
    {{num}}
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" v-resubmit @click="saveOrder">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
  .block {
    padding: 10px;
  }
</style>
<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        num:10,
      };
    },
    methods: {
      saveOrder:function(){
        this.num++;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      }
    }
  };
</script>
