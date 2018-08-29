<!-- Home.vue -->
<template>

  <div class="content">
    <ul>
      <li
        v-for="(item, index) in items">
        {{item.id}} -----
        {{item.title}} -----
        <img :src="item.img">

      </li>
    </ul>
  </div>

</template>
<style>

</style>
<script>
  import axios from 'axios'
  import '../../mock/mock'

  export default {
    data() {
      return {
        items: []
      }
    },
    // 在components字段中，包含导入的子组件
    created: function () {
      this.getData()
    },
    computed: {
      // 显示几条计算
      filteredItems: function () {
        return this.items.slice(0, 2)
      }
    },
    methods: {
      getData: function () {
        axios.get('/api/books').then((res) => {
          console.log(res.data.books);
          this.items = res.data.books
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>
