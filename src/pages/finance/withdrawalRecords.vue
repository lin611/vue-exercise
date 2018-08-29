<template>
  <div id="withdrawalRecords">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="商家提现" name="first">
        <merchantWithdrawalRecords></merchantWithdrawalRecords>
      </el-tab-pane>
      <el-tab-pane label="推广员提现" name="second">
        <promoterWithdrawalRecords></promoterWithdrawalRecords>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss">
  #promotersList {
    .el-tabs__nav-wrap.is-top {
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
    }
    .el-tabs__item {
      &.is-top {
        border-bottom: 0;
      }
      &.is-active {
        background: #fff;
        border-bottom: 0 solid #fff;
      }
    }
  }
</style>
<script>
  import merchantWithdrawalRecords from '@/pages/finance/merchantWithdrawalRecords'
  import promoterWithdrawalRecords from '@/pages/finance/promoterWithdrawalRecords'

  export default {
    data() {
      return {
        activeName: 'first',
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      merchantWithdrawalRecords,
      promoterWithdrawalRecords
    }
  };
</script>

