<template>
  <div id="app">
    <!-- 头部导航 -->
    <header>
      header
    </header>
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu
          :default-active="$route.path"
          :unique-opened="true"
          :router="true"
          class="navMenu"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="/axiosGetDate">axios获取数据</el-menu-item>
            <el-menu-item index="/parentValue">组件之间传值</el-menu-item>
            <el-menu-item index="/basicOperation">基本操作</el-menu-item>
            <el-menu-item index="/unrefreshedSearch">无刷新检索</el-menu-item>
            <el-menu-item index="/tabs">tabs切换效果</el-menu-item>
            <el-menu-item index="/currentDom">操作当前的DOM</el-menu-item>
            <el-menu-item index="/md5">md5加密</el-menu-item>
            <el-menu-item index="/handleScrollbar">监听滚动条</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>ElementUI</span>
            </template>
            <el-menu-item index="/dateTimePicker">日期时间选择器</el-menu-item>
            <el-menu-item index="/parentValue">组件之间传值</el-menu-item>
            <el-menu-item index="/basicOperation">基本操作</el-menu-item>
            <el-menu-item index="/select">选择框</el-menu-item>
            <el-menu-item index="/tabs">tabs切换效果</el-menu-item>
            <el-menu-item index="/currentDom">操作当前的DOM</el-menu-item>
            <el-menu-item index="/cascader">Cascader 级联选择器</el-menu-item>
            <el-menu-item index="/resubmit">防重复提交</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">公用组件</span>
            </template>
            <el-menu-item index="/editor">富文本编辑器</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span slot="title">财务</span>
            </template>
            <el-menu-item index="/comprehensiveStatistics">综合统计</el-menu-item>
            <el-menu-item index="/salesStatistics">销售统计</el-menu-item>
            <el-menu-item index="/withdrawalRecords">提现记录</el-menu-item>
            <el-menu-item index="/merchantWithdrawalRecords">商家提现记录</el-menu-item>
            <el-menu-item index="/promoterWithdrawalRecords">推广员提现记录</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 右侧主内容区 -->
      <div class="main-right main-content">
        <router-view class="view"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created() {

    },
    mounted() {

    },
  }
</script>

<style>
  @import "../assets/css/base.css";
  @import "../assets/css/cover.scss";
</style>
<style lang="scss">
  #app {
    .info {
      font-size: 14px;
      float: right;
      margin-right: 20px;
      display: inline-block;
      line-height: 48px;
    }
    .main-left {
      .navMenu .el-submenu__title:hover {
        background: #ffffff;
        color: #1875F0 !important;
        i {
          color: #1875f0
        }
      }
      .el-menu {
        border-radius: 0;
        .el-menu-item {
          padding-left: 66px !important;
          padding-right: 0;
          min-width: 155px;
        }
        .home, .account, .product, .order, .finance, .setting, .statics, .notice {
          width: 15px;
          height: 15px;
          display: inline-block;
        }

        .home {

        }
      }
      .toggle-collapse {
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #333;
        padding-top: 15px;

        div {
          margin: auto;
          width: 15px;
          height: 15px;
        }
      }
      &.expand {
        overflow-x: hidden;
      }
      .em {
        display: inline-block;
        position: relative;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #b20000;
        top: -10px;
      }
      .count {
        display: inline-block;
        position: relative;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 50%;
        background: #b20000;
        font-size: 12px;
        color: #ffffff;
        top: -10px;
      }
    }
    .main-right {
      &.collapse {
        left: 64px;
      }
      &.expand {
        left: 156px;
      }
    }
    .statementContent {
      width: 530px;
      height: 195px;
      overflow-y: scroll;
      margin: auto;
    }
  }
</style>
