<template>
  <div>
    <el-select v-model="value5" multiple placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select
      v-model="value11"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>

    <el-select id="test"
      v-model="value10"
      placeholder="请选择文章标签">
      <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<style lang="scss" scoped>
  .block {
    padding: 10px;
  }
</style>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶'
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        value5: ["1", "3", "4"],
        value11: [],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    },
    watch: {
      value5(){
        console.log(this.value5)
      }
    }
  };
</script>
