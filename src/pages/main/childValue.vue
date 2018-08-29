<template>
  <div>
    子组件:
    <span>{{childValue}}</span>
    <!-- 定义一个子组件传值的方法 -->
    <input type="button" value="点击触发" v-on:click="childClick">
  </div>
</template>
<script>
  export default {
    props: {
      parentName: ''
    },
    data () {
      return {
        childValue: '我是子组件的数据'
      }
    },
    created: function () {
      // this.childClick();

    },
    methods: {
      childClick () {
        // childByValue是在父组件on监听的方法
        // 第二个参数this.childValue是需要传的值
        this.$emit('childByValue', this.childValue)
      }
    }
  }
</script>
