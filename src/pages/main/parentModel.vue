<!-- parent.vue -->
<template>
  <div>
    <children :parentMsg.sync="parentMsg"></children>
    <!-- 此处只需在平时常用的单向传值上加上.sync修饰符 -->
  </div>
</template>
<script>
  import children from '../../pages/main/childrenModel';

  export default {
    components: {
      children
    },
    data() {
      return {
        parentMsg: 'test'
      }
    },
    watch: {
      parentMsg(newV, oldV) {
        console.log(newV, oldV);
        //三秒后控制台会输出
        //'3秒后出现的某个值','test'
      }
    }
  }
</script>
