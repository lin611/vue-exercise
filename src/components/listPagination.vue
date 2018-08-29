<template>
  <div id="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
      layout="prev, pager, next, jumper"
      :total="pageTotal">
    </el-pagination>
  </div>
</template>
<style scoped>
  .el-pagination {
    text-align: right;
  }
</style>
<script>
  export default {
    name: "list-pagination",
    props: {
      pageTotal: '',
      currentPage: '',
      pagesize:''
    },
    data() {
      return {
      };

    },
    methods: {
      handleSizeChange: function (size) {
       // this.pagesize = size;
        this.$emit('childByPagesize', size)
      },
      handleCurrentChange: function (currentPage) {
        // this.currentPage = currentPage;
        this.$emit('childByCurrentPage', currentPage)
      }
    }
  };
</script>
