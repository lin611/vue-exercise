<!--<template>-->
<!--<div id="example">-->
<!--<el-cascader-->
<!--clearable-->
<!--filterable-->
<!--expand-trigger="hover"-->
<!--v-model="selectedOptions"-->
<!--:options="cascaderoPtions"-->
<!--@change="handleItemChange"-->
<!--:props="cascaderProps"-->
<!--&gt;</el-cascader>-->
<!--</div>-->
<!--</template>-->
<!--<style>-->

<!--</style>-->
<!--<script>-->
<!--import axios from 'axios'-->
<!--import '../../mock/finance'-->
<!--export default {-->
<!--data() {-->
<!--return {-->
<!--pcCode: '',-->
<!--cascaderoPtions: [],-->
<!--selectedOptions: [],-->
<!--cascaderProps: {-->
<!--value: 'pcCode',-->
<!--label:'categoryName',-->
<!--children: 'childCategory'-->
<!--}-->
<!--};-->
<!--},-->
<!--created: function () {-->
<!--this.getData()-->
<!--},-->
<!--methods: {-->
<!--getData() {-->
<!--axios.get('/main/cascader').then((response) => {-->
<!--if (response.data.status === 0) {-->
<!--this.cascaderoPtions = response.data.data;-->
<!--console.log(response.data.data);-->
<!--} else {-->
<!--this.$message.error(response.data.message)-->
<!--}-->
<!--}).catch((response) => {-->
<!--console.log(response);-->
<!--})-->
<!--},-->
<!--handleItemChange(val) {-->
<!--console.log('active item:', val);-->

<!--}-->
<!--},-->
<!--watch: {-->
<!--selectedOptions() {-->
<!--console.log(this.selectedOptions[this.selectedOptions.length - 1]);-->
<!--},-->
<!--}-->
<!--};-->
<!--</script>-->
<template>
  <div class="costPointsRule">
    <el-checkbox-group v-model="currentChecked" v-for="item in checkLists" :key="item.id">
      <el-row>
        <el-col :span="6" style="display:flex;flex-direction:column">
          <el-checkbox :label="item.name" @change="checkBoxList"></el-checkbox>
        </el-col>
        <el-col :span="14">
          <el-input @input="aaa" v-model="costPoints[item.name]"
                    placeholder="请输入消耗积分数"
                    class="checkInput"></el-input>
        </el-col>
      </el-row>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checkLists: [{
          id: 1, name: '普通会员'
        }, {
          id: 2, name: '一级会员'
        }],
        currentChecked: [],
        costPoints: {}
      }
    },
    methods: {
      checkBoxList(a, b) {
        // console.log(a, b)
      },
      aaa(a) {
        // console.log(a, this.costPoints)
      }
    },
    watch: {
      currentChecked() {
       // console.log(this.currentChecked)
      },
      costPoints() {
        console.log(this.costPoints)
      }
    }
  }

</script>
