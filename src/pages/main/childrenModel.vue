<!-- children.vue -->
<template>
  <div>
    <h1>{{ parentMsg }}</h1></div>
</template>
<script>

  export default{
    props:{
      parentMsg:String
    },
    mounted(){
      //这里模拟异步将msg传到父组件v-model，实现双向控制
      setTimeout(_=>{
        let some = '3秒后出现的某个值';//子组件自己的某个值
        this.$emit('update:parentMsg',some);
        //将这个值通过 emit
        //update为固定字段，通过冒号连接双向绑定的msg，将some传递给父组件的v-model绑定的变量
      },3000);
    }
  }
</script>

