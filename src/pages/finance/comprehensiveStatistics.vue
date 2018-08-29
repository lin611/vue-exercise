<template>
  <div id="comprehensiveStatistics">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="订单统计" name="first">
        <orders-statistics></orders-statistics>
      </el-tab-pane>
      <el-tab-pane label="会员统计" name="second">
        <member-statistics></member-statistics>
      </el-tab-pane>
      <el-tab-pane label="分销统计" name="third">
        <distribution-statistics></distribution-statistics>
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
  import ordersStatistics from '@/pages/finance/ordersStatistics'
  import memberStatistics from '@/pages/finance/memberStatistics'
  import distributionStatistics from '@/pages/finance/distributionStatistics'
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
      ordersStatistics,
      memberStatistics,
      distributionStatistics
    }
  };
</script>

