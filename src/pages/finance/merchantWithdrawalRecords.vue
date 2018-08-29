<template>
  <div id="salesStatistics">

    <el-row :gutter="0" type="flex" class="toolbar">
      <el-col :span="24">
        <el-radio-group v-model="listStatus" @change="changeTabletData" size="medium">
          <el-radio-button label="1">待付款</el-radio-button>
          <el-radio-button label="2">已打款</el-radio-button>
        </el-radio-group>
        <el-dropdown trigger="click" :key="Math.random()" v-if="listStatus=== '1'">
          <el-button type="">
            批量操作<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>确认打款</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary">导出数据</el-button>

        <el-form ref="searchForm" :model="searchForm" :inline="true" class="flush-right">
          <el-form-item>
            <el-input v-model="searchForm.keyword" class="input-text"
                      placeholder="提现单号"
                      suffix-icon="el-icon-search">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="searchForm.merchant" class="input-text"
                      placeholder="商家名称"
                      suffix-icon="el-icon-search">
            </el-input>
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
    <div class="alert-info" v-if="listStatus=== '1'">今日已打款：<span class="highlight">2000000.00</span>元</div>
    <div class="main-panel">
      <el-table
        ref="tableData"
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        style="width: 100%"
        @select="selectionChange"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="wasteBook"
          label="提现流水号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="tel"
          label="推广员手机"
          width="150">
        </el-table-column>
        <el-table-column
          prop="company"
          label="商家公司名称"
        >
        </el-table-column>
        <el-table-column
          prop="region"
          label="区域"
          width="160">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="提现金额（¥）"
          width="120">
        </el-table-column>
        <el-table-column
          prop="wechat"
          label="打款微信账号"
          width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.wechat=== ''">-</span>
            <span v-else> {{ scope.row.wechat }} </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="alipay"
          label="打款支付宝账号"
          width="200">
          <template slot-scope="scope">
            <span v-if="scope.row.wechat=== ''">{{ scope.row.alipay }}</span>
            <span v-else> - </span>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="申请时间"
          width="200">
        </el-table-column>

        <el-table-column :key="Math.random()" v-if="listStatus=== '1'"
                         label="操作"
                         width="100">
          <template slot-scope="scope">
            <el-button @click="handleAffirm(scope.$index, scope.row)" type="text" size="small">确认打款</el-button>
          </template>
        </el-table-column>
        <el-table-column :key="Math.random()" v-if="listStatus=== '2'"
                         prop="processDate"
                         label="处理时间"
                         width="200">
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
    float: right;
    display: inline;
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

  .alert-info {
    background-color: #f0f9eb;
    color: #67c23a;
    margin-top: -10px;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    .highlight {
      color: #f56c6c;
      font-size: 24px;
      margin-right: 3px;
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
          merchant: '',
          valueDate: ''
        },
        tableData: [],
        currentPage: '1',
        pagesize: '10',
        multipleSelection: [],
        listStatus: '1'
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
        axios.get('/finance/merchantWithdrawalRecords?listStatus=1').then((res) => {
          console.log(res.data.tableData);
          this.tableData = res.data.tableData
        }).catch(function (error) {
          console.log(error);
        })
      },
      // 切换列表
      changeTabletData: function (value) {
        axios.get("/finance/merchantWithdrawalRecords?listStatus=" + value + "").then((res) => {
          console.log(res.data.tableData);
          this.tableData = res.data.tableData;
        }).catch(function (error) {
          console.log(error);
        })
      },
      // 确认打款
      handleAffirm: function (index, row) {
        this.$confirm('您确认打款吗?', '提示', {
          type: 'warning'
        })
          .then(_ => {
            this.tableData.splice(index, 1);
          })
          .catch(_ => {
          });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        // console.log(val);
        this.multipleSelection = val;
        let ids = [];
        this.multipleSelection.map((item) => {
          ids.push(item.key)
        });
        this.selectedIDs = ids;
        console.log('多选', this.selectedIDs)
      },
      selectionChange: function (val, row) {
        //  console.log(row.descr);
      },
      // 分页
      childByCurrentPage: function (childByCurrentPage) {
        this.currentPage = childByCurrentPage
      },
      childByPagesize: function (childByPagesize) {
        this.pagesize = childByPagesize
      }
    }
  };
</script>
