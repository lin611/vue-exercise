<template>
  <div>
    　　
    <div>#动态组件实现tab切换效果#</div>
    <br><br><br>
    　　　　
    <nav>
      　　　　　　<a href="javascript:void(0)" :class="{active:isActive}" @click="toggleTabs('first')">{{firstTitle}}</a>
      　 　　<a href="javascript:void(0)" :class="{active:isActive}" @click="toggleTabs('second')">{{secondTitle}}</a>
      　　　 <a href="javascript:void(0)" :class="{active:isActive}" @click="toggleTabs('third')">{{thirdTitle}}</a>
      　　　　
    </nav>

    <!--　　　　　　动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数-->
    　　　　　　
    <first :is="currentView" keep-alive></first>
  </div>
</template>

<script>
  //导入子组件
  import first from '../../../pages/main/tabs/first'
  import second from '../../../pages/main/tabs/second'
  import third from '../../../pages/main/tabs/third'

  export default {
    data() {
      return {
        firstTitle: "订单统计", //导航栏文本1
        secondTitle: "会员统计", //导航栏文本2
        thirdTitle: "分销统计", //导航栏文本3
        currentView: 'first', //默认选中first子组件
        isActive:true
      };
    },
    components: {
      first,
      second,
      third
    },
    methods: {
      toggleTabs(tab) {
        this.currentView = tab;
      }
    }
  }
</script>

<style lang="scss">
  nav {
    width: 600px;
    background: #eeeeee;
    padding: 0 10px;
    a {
      text-decoration: none;
      color: #000;
      display: inline-block;
      width: 150px;
      text-align: center;
      background: #aaaaaa;
      padding: 10px;
      &.active {
        background: #ff6c33;
      }
    }
  }
</style>
