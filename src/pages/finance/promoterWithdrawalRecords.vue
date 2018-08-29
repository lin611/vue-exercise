<template>
  <div id="promoterWithdrawalRecords">
    <el-row :gutter="0" type="flex" class="toolbar">
      <el-col :span="24">
        <el-radio-group v-model="listStatus" @change="changeTabletData" size="medium">
          <el-radio-button label="1">待付款</el-radio-button>
          <el-radio-button label="2">已打款</el-radio-button>
          <el-radio-button label="3">已拒绝</el-radio-button>
        </el-radio-group>
        <el-dropdown trigger="click" :key="Math.random()" v-if="listStatus=== '1'">
          <el-button type="">
            批量操作<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>确认打款</el-dropdown-item>
            <el-dropdown-item>拒绝</el-dropdown-item>
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
            <el-select v-model="searchForm.overdue" class="input-select"
                       placeholder="是否过售后期">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select v-model="searchForm.level" class="input-select"
                       placeholder=" 推广员等级">
              <el-option label="一级推广员" value="1"></el-option>
              <el-option label="二级推广员" value="2"></el-option>
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
    <div class="alert-info" v-if="listStatus=== '1'">今日已打款：<span class="highlight">43444000.00</span>元</div>
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
          prop="name"
          label="名字"
        >
        </el-table-column>
        <el-table-column
          prop="level"
          label="级别"
          width="160">
          <template slot-scope="scope">
            <span :class="['level-'+scope.row.level]">{{ scope.row.level|levelFilter }}</span>
          </template>
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
          prop="overdue"
          label="是否过售后期"
          width="100">
          <template slot-scope="scope">
            <span :class="['overdue-'+scope.row.overdue]">{{ scope.row.overdue|overdueFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column :key="Math.random()" v-if="listStatus=== '1'"
                         label="操作"
                         width="120">
          <template slot-scope="scope">
            <el-button @click="handleAffirm(scope.$index, scope.row)" type="text" size="small">确认打款</el-button>
            <span class="lines">|</span>
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">拒绝</el-button>
          </template>
        </el-table-column>
        <el-table-column :key="Math.random()" v-if="listStatus=== '2'"
                         prop="processDate"
                         label="处理时间"
                         width="200">
        </el-table-column>
        <el-table-column :key="Math.random()" v-if="listStatus=== '3'"
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
    <!-- 拒绝 -->
    <el-dialog title="拒绝理由" :visible.sync="editFormVisible" :width="dialogWidth">
      <el-form  :model="editForm" ref="editForm" :rules="rules" >
        <el-form-item label=" " prop="descr"  :label-width="formLabelWidth">
          <el-input type="textarea" v-model="editForm.descr" placeholder="请输入拒绝理由"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
    margin-top: -10px;
    background-color: #f0f9eb;
    color: #67c23a;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 6px;
    .highlight {
      color: #f56c6c;
      font-size: 24px;
      margin-right: 3px;
    }
  }
  .overdue-0{color: #F56C6C;}
  .overdue-1{ color: #67C23A;}
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
          overdue: '',
          level: '',
          valueDate: ''
        },
        tableData: [],
        currentPage: '1',
        pagesize: '10',
        multipleSelection: [],
        listStatus: '1',
        editFormVisible: false,
        editForm: {
          descr: ''
        },
        rules: {
          descr: [
          {required: true, message: '请输入拒绝理由', trigger: 'change'},
          {min: 1, max: 400, message: '长度在 1 到 400 个字符', trigger: 'blur'}
        ]
      },
        dialogWidth: '500px',
        formLabelWidth: '20px',
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
        axios.get('/finance/promoterWithdrawalRecords?listStatus=1').then((res) => {
          console.log(res.data.tableData);
          this.tableData = res.data.tableData
        }).catch(function (error) {
          console.log(error);
        })
      },
      // 切换列表
      changeTabletData: function (value) {
        axios.get("/finance/promoterWithdrawalRecords?listStatus=" + value + "").then((res) => {
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
      // 拒绝
      handleEdit: function (index, row) {
        this.editFormVisible = true;
        this.editForm = Object.assign({}, row);
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
    },
    filters: {
       levelFilter(status) {
        const statusMap = {
          1: '一级',
          2: '二级'
        };
        return statusMap[status];
      },
      overdueFilter(status) {
        const statusMap = {
          0: '否',
          1: '是'
        };
        return statusMap[status];
      }
    }
  };
</script>
