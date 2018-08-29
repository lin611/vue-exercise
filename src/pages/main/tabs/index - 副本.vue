<template>
  <div>
    　　
    <div>#动态组件实现tab切换效果#</div>
    <br><br><br>
    　　　　
    <nav>
      　　　　　　<a href="javascript:void(0)" @click="toggleTabs(1)">{{first}}</a>
      　 　　<a href="javascript:void(0)" @click="toggleTabs(2)">{{second}}</a>
      　　　 <a href="javascript:void(0)" @click="toggleTabs(3)">{{third}}</a>
      　　　　
    </nav>

    　　　　　　//动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换。如果把切换出去的组件保留在内存中，可以保留它的状态或避免重新渲染。为此可以添加一个 keep-alive 指令参数
    　　　　　　
    <first :is="currentView" keep-alive></first>
    　　
  </div>
</template>

<script>
  //导入子组件
  import first1 from '../../../pages/main/tabs/first'
  import first2 from '../../../pages/main/tabs/second'
  import first3 from '../../../pages/main/tabs/third'

  export default {
    data() {
      return {
        first: "订单统计", //导航栏文本1
        second: "会员统计", //导航栏文本2
        third: "分销统计", //导航栏文本3
        currentView: 'first1' //默认选中first子组件
      };
    },
    components: {
      first1,
      first2,
      first3
    },
    methods: {
      toggleTabs(val) {
        this.currentView = 'first' + val;
      }
    }
  }
</script>

//使用sass
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
    }
  }
</style>
