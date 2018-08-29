<template>
  <div id="salesStatistics">
    <el-row :gutter="0" type="flex" class="toolbar">
      <el-col :span="6">
        <el-button type="primary">导出数据</el-button>
      </el-col>
      <el-col :span="18">
        <el-form ref="searchForm" :model="searchForm" :inline="true" class="flush-right">
          <el-form-item>
            <el-select v-model="searchForm.status" class="input-select"
                       placeholder="订单状态">
              <el-option label="待付款" value="1"></el-option>
              <el-option label="待发货" value="2"></el-option>
              <el-option label="已发货" value="3"></el-option>
              <el-option label="已完成" value="4"></el-option>
              <el-option label="已关闭" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="searchForm.dateType" class="input-select"
                       placeholder="订单时间类型">
              <el-option label="发货时间" value="1"></el-option>
              <el-option label="下单时间" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
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
      <el-table
        ref="tableData"
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        style="width: 100%">
        <el-table-column
          prop="orderID"
          label="订单号"
        >
        </el-table-column>
        <el-table-column
          prop="goodsName"
          label="商品名称"
        >
        </el-table-column>
        <el-table-column
          prop="orderNum"
          label="商品数量"
        >
        </el-table-column>
        <el-table-column
          prop="orderAmount"
          label="订单金额"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="订单状态"
        >
          <template slot-scope="scope">
            <span :class="['status-'+scope.row.status]">{{ scope.row.status|statusFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="下单时间"
        >
        </el-table-column>
        <el-table-column
          prop="deliveryDate"
          label="发货时间">
          <template slot-scope="scope">
            <span v-if="scope.row.status== '1' || scope.row.status== '2' || scope.row.status== '5'">-</span>
            <span v-else> {{ scope.row.deliveryDate }}</span>
          </template>
        </el-table-column>
      </el-table>
      <list-pagination
        :pageTotal="this.tableData.length"
        v-on:childByCurrentPage="childByCurrentPage"
        v-on:childByPagesize="childByPagesize">
      </list-pagination>
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

  .input-text {
    width: 176px;
  }

  .input-select {
    width: 130px;
  }

  .input-daterange {
    width: 240px;
  }

  .input-descr {
    color: #999;
    font-size: 12px;
    line-height: 22px;
  }

  .el-pagination {
    text-align: right;
  }

  .lines {
    color: #409EFF;
    display: inline;
  }
</style>
<style lang="scss">
  .main-panel {
    .el-table {
      border-radius: 4px;
      th {
        background: #F5F6FA;
      }
    }
  }
</style>
<script>
  import axios from 'axios'
  import '../../mock/finance'
  import listPagination from '../../components/listPagination'

  export default {
    data() {
      return {
        searchForm: {
          keyword: '',
          status: '',
          dateType: '',
          valueDate: ''
        },
        tableData: [],
        currentPage: '1',
        pagesize: '10',
        multipleSelection: [],
      };

    },
    components: {
      listPagination
    },
    created: function () {
      this.getData()
    },
    methods: {
      // 获取列表
      getData: function () {
        axios.get('/finance/salesStatistics').then((res) => {
          console.log(res.data.tableData);
          this.tableData = res.data.tableData
        }).catch(function (error) {
          console.log(error);
        })
      },
      // 分页
      childByCurrentPage: function (childByCurrentPage) {
        this.currentPage = childByCurrentPage
      },
      childByPagesize: function (childByPagesize) {
        this.pagesize = childByPagesize
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          1: '待付款',
          2: '待发货',
          3: '已发货',
          4: '已完成',
          5: '已关闭'
        };
        return statusMap[status];
      }
    }
  };
</script>
