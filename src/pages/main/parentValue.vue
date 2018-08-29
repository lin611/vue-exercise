<template>
  <div>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
      <child v-on:childByValue="childByValue"></child>
    <childName :parentName="parentName"></childName>
  </div>
</template>
<script>
  import child from '../../pages/main/childValue'
  import childName from '../../pages/main/childName'
  export default {
    components: {
      child,
      childName
    },
    data () {
      return {
        name: '',
        parentName: '我是父组件数据'
      }
    },
    methods: {
      childByValue: function (childValue2) {
        // childValue就是子组件传过来的值
        this.name = childValue2
      }
    }
  }
</script>
