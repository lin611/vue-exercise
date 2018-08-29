<template>
  <div>
    子组件2:
    <span>{{parentName}}</span>
  </div>
</template>
<script>
  export default {
    props: {
      parentName: ''
    },
    data() {
      return {}
    },
    created: function () {
    },
    methods: {}
  }
</script>
