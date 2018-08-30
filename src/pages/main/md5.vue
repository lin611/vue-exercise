<!-- Home.vue -->
<template>

  <div class="content">
    <p>{{ message }}</p>
    <p>{{ messagemd5 }}</p>
    <input v-model="message">


  </div>

</template>
<style>

</style>
<script>
  import md5 from 'js-md5';

  export default {
    data() {
      return {
        messagemd5: '',
        message: '',
      }
    },
    watch: {
      message() {
       this.messagemd5=md5(this.message);
      },
    }
  }
</script>
