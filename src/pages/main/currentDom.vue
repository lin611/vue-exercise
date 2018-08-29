<template>
  <div>
    <ul>
      <li v-for='courses in course'  @click="clickcourse($event,$index)" v-bind:class="{'active':nowIndex==$index}">
        {{courses.coursename}}
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  li {
    cursor: pointer;
    margin: 30px;
  }

  .active {
    color: red;
  }
</style>
<script>
  export default {
    data() {
      return {
        course: [
          {coursename: "数学", id: "11"},
          {coursename: "语文", id: "2"},
          {coursename: "英语", id: "3"},
          {coursename: "历史", id: "4"}
        ],
        nowIndex: 0
      }
    },
    methods: {
      clickcourse: function (event, num) {
        var toggle = event.currentTarget;
        this.nowIndex = num;
      }
    }
  }
</script>


