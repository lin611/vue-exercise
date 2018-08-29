<template>
  <div id="distributionStatistics">
    <el-row :gutter="0" type="flex" class="toolbar">
      <el-col :span="6">
        <el-button type="primary">导出数据</el-button>
      </el-col>
      <el-col :span="18">
        <el-form ref="searchForm" :model="searchForm" :inline="true" class="flush-right">
          <el-date-picker
            v-model="searchForm.valueDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="input-daterange">
          </el-date-picker>
          <div class="date-tag">
            <el-button type="text" size="small">近7天</el-button>
            <el-button type="text" size="small">近30天</el-button>
          </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div class="main-panel">
      <table  ref="tableData"  :data="tableData"
              class="table-custom">
        <tr>
          <th>分销总额</th>
          <td>{{tableData.distributionNum}}</td>
        </tr>
        <tr>
          <th>一级推广员订单总数</th>
          <td>{{tableData.firstsOrderNum}}</td>
        </tr>
        <tr>
          <th>二级推广员订单总数</th>
          <td> {{tableData.secondsOrderNum}}</td>
        </tr>
        <tr>
          <th>佣金总额</th>
          <td>¥  {{tableData.brokerageTotal}}</td>
        </tr>
        <tr>
          <th>一级累计佣金</th>
          <td>¥ {{tableData.firstsBrokerageTotal}}</td>
        </tr>
        <tr>
          <th>二级累计佣金</th>
          <td>¥ {{tableData.secondsBrokerageTotal}} </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .main-panel {
    background: #fff;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    padding: 30px;
  }

  .flush-right {
    text-align: right;
  }

  .date-tag {
    display: inline;
    padding-left: 20px;
  }

  .form-head {
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #EAEAEA;
    margin-bottom: 30px;
  }

  .sub-label {
    display: inline-block;
    width: 160px;
    text-align: right;
    margin-right: 10px;
  }

  .input-text {
    width: 150px;
  }

  .input-descr {
    color: #999;
    font-size: 12px;
    line-height: 22px;
  }

  .table-custom {
    border-collapse: collapse;
    margin: 0 auto;
    width: 90%;
    th {
      border: 1px solid #E4E7ED;
      text-align: right;
      padding: 10px;
      width: 200px;
      background-color: #EEF2F8;
      font-weight: normal;
    }

    td {
      border: 1px solid #E4E7ED;
      text-align: left;
    }

  }
</style>
<script>
  import axios from 'axios'
  import '../../mock/finance'
  export default {
    data() {
      return {
        searchForm: {
          valueDate: ''
        },
        tableData: '',
      }
    },
    created: function () {
      this.getData()
    },
    methods: {
      // 获取
      getData: function () {
        axios.get('/finance/distributionStatistics').then((res) => {
          console.log(res.data.tableData);
          this.tableData = res.data.tableData
        }).catch(function (error) {
          console.log(error);
        })
      }
    }
  }
</script>
