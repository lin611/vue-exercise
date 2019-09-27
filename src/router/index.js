import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import mainIndex from '../pages/main/mainIndex.vue'   // 首页
import axiosGetDate from '../pages/main/axiosGetDate.vue'   // axios获取数据
import parentValue from '../pages/main/parentValue.vue'   // 组件之间传值
import basicOperation from '../pages/main/basicOperation.vue'   // 基本操作
import unrefreshedSearch from '../pages/main/unrefreshedSearch.vue'   // 无刷新检索
import tabs from '../pages/main/tabs/index.vue'   // tabs切换
import currentDom from '../pages/main/currentDom.vue'   // 操作当前的DOM
import md5 from '../pages/main/md5.vue'   // 操作当前的DOM
import dateTimePicker from '../pages/element/dateTimePicker.vue'                                    // 日期时间选择器
import cascader from '../pages/element/Cascader.vue'   // Cascader 级联选择器
import select from '../pages/element/select.vue'   // select 选择
import editor from '../pages/common/editor.vue'   // UEditor 富文本编辑器
import handleScrollbar from '../pages/main/handleScrollbar.vue'   // 监听滚动条
import resubmit from '../pages/element/resubmit.vue'   // 防重复提交
import parentModel from '../pages/main/parentModel.vue'   // 双向绑定
import circulationModel from '../pages/main/circulationModel.vue'   // 循环绑定
import uploadPic from '../pages/element/uploadPic.vue'   // 上传组件
import toast from '../pages/common/toast.vue'   // 上传组件
import comprehensiveStatistics from '../pages/finance/comprehensiveStatistics.vue'                                    // 综合统计
import salesStatistics from '../pages/finance/salesStatistics.vue'                            // 销售统计
import withdrawalRecords from '../pages/finance/withdrawalRecords.vue'                                  // 提现记录
import merchantWithdrawalRecords from '../pages/finance/merchantWithdrawalRecords.vue'                                  // 商家提现记录
import promoterWithdrawalRecords from '../pages/finance/promoterWithdrawalRecords.vue'                        // 推广员提现记录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/mainIndex',
          name: 'mainIndex',
          component: mainIndex
        },
        {
          path: '/axiosGetDate',
          name: 'axiosGetDate',
          component: axiosGetDate
        },
        {
          path: '/parentValue',
          name: 'parentValue',
          component: parentValue
        },
        {
          path: '/basicOperation',
          name: 'basicOperation',
          component: basicOperation
        },
        {
          path: '/unrefreshedSearch',
          name: 'unrefreshedSearch',
          component: unrefreshedSearch
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: tabs
        },
        {
          path: '/currentDom',
          name: 'currentDom',
          component: currentDom
        },
        {
          path: '/md5',
          name: 'md5',
          component: md5
        },
        {
          path: '/dateTimePicker',
          name: 'dateTimePicker',
          component: dateTimePicker
        },
        {
          path: '/cascader',
          name: 'cascader',
          component: cascader
        },
        {
          path: '/select',
          name: 'select',
          component: select
        },
        {
          path: '/resubmit',
          name: 'resubmit',
          component: resubmit
        },
        {
          path: '/editor',
          name: 'editor',
          component: editor
        },
        {
          path: '/parentModel',
          name: 'parentModel',
          component: parentModel
        },
        {
          path: '/handleScrollbar',
          name: 'handleScrollbar',
          component: handleScrollbar
        },
        {
          path: '/circulationModel',
          name: 'circulationModel',
          component: circulationModel
        },
        {
          path: '/uploadPic',
          name: 'uploadPic',
          component: uploadPic
        },
        {
          path: '/comprehensiveStatistics',
          name: 'comprehensiveStatistics',
          component: comprehensiveStatistics
        },
        {
          path: '/salesStatistics',
          name: 'salesStatistics',
          component: salesStatistics
        },
        {
          path: '/withdrawalRecords',
          name: 'withdrawalRecords',
          component: withdrawalRecords
        },
        {
          path: '/merchantWithdrawalRecords',
          name: 'merchantWithdrawalRecords',
          component: merchantWithdrawalRecords
        },
        {
          path: '/promoterWithdrawalRecords',
          name: 'promoterWithdrawalRecords',
          component: promoterWithdrawalRecords
        },
        {
          path: '/toast',
          name: 'toast',
          component: toast
        },
          {
              path: '/numScroll',
              name: 'numScroll',
              component: () => import('@/pages/main/numScroll'),
          },
      ],
      redirect: '/mainIndex'
    }
  ]
})
