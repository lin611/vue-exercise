import Mock from 'mockjs'

Mock.mock('/api/books', {
  'books|1-10': [{
    'id|+1': 1,
    'title': '@pick(["语文", "数学", " 英文", "历史1"])',
    'img': '@image(100x60, @color)',
    'price|1-100': 100
  }]
});
Mock.mock('/finance/ordersStatistics', {
  'tableData': {
    'salesTotal|1-10000000.2': 1,
    'validOrdeNum|1-10000': 1,
    'validOrderTotal|1-10000.2': 1,
    'invalidOrderTotal|1-10000.2': 1,
    'accomplishOrdeNum|1-10000': 1,
    'accomplishOrderTotal|1-100000.2': 1
  }
});
Mock.mock('/finance/memberStatistics', {
  'tableData': {
    'memberNum|1-10000000': 1,
    'firstsNum|1-10000': 1,
    'secondsNum|1-10000': 1,
    'memberOrderNum|1-10000': 1,
    'memberShoppingTotal|1-10000.2': 1,
    'memberBuyRate|1-100': 1,
  }
});
Mock.mock('/finance/distributionStatistics', {
  'tableData': {
    'distributionNum|1-10000000': 1,
    'firstsOrderNum|1-10000': 1,
    'secondsOrderNum|1-10000': 1,
    'brokerageTotal|1-1000000.2': 1,
    'firstsBrokerageTotal|1-10000.2': 1,
    'secondsBrokerageTotal|1-10000.2': 1,
  }
});
Mock.mock('/finance/merchantWithdrawalRecords?listStatus=1', {
  'tableData|10-50': [{
    'wasteBook': /^2018[0-9]{16}$/,
    'tel': /^1[0-9]{10}$/,
    'company': '@pick(["德力铁道科技有限公司", "博创生态农业有限公司", " 天网智能防护系统有限公司", "艾行科技有限公司", "天福家庭用品有限公司", " 美达食品有限责任公司"])',
    'region': '@city(true)',
    'amount|1000-10000.2': 1,
    'wechat|0-1': /^1[0-9]{10}$/,
    'alipay': /^1[0-9]{10}$/,
    'date': '@datetime',
    'processDate': ''
  }]
});
Mock.mock('/finance/merchantWithdrawalRecords?listStatus=2', {
  'tableData|10-50': [{
    'wasteBook': /^2018[0-9]{16}$/,
    'tel': /^1[0-9]{10}$/,
    'company': '@pick(["德力铁道科技有限公司", "博创生态农业有限公司", " 天网智能防护系统有限公司", "艾行科技有限公司", "天福家庭用品有限公司", " 美达食品有限责任公司"])',
    'region': '@city(true)',
    'amount|1000-10000.2': 1,
    'wechat|0-1': /^1[0-9]{10}$/,
    'alipay': /^1[0-9]{10}$/,
    'date': '@datetime',
    'processDate': '@datetime'
  }]
});
Mock.mock('/finance/promoterWithdrawalRecords?listStatus=1', {
  'tableData|10-50': [{
    'wasteBook': /^2018[0-9]{16}$/,
    'tel': /^1[0-9]{10}$/,
    'name': '@cname',
    'level|1-2': 1,
    'region': '@city(true)',
    'amount|1000-10000.2': 1,
    'wechat|0-1': /^1[0-9]{10}$/,
    'alipay': /^1[0-9]{10}$/,
    'date': '@datetime',
    'processDate': '@datetime',
    'overdue|0-1': 1
  }]
});
Mock.mock('/finance/promoterWithdrawalRecords?listStatus=2', {
  'tableData|10-50': [{
    'wasteBook': /^2018[0-9]{16}$/,
    'tel': /^1[0-9]{10}$/,
    'name': '@cname',
    'level|1-2': 1,
    'region': '@city(true)',
    'amount|1000-10000.2': 1,
    'wechat|0-1': /^1[0-9]{10}$/,
    'alipay': /^1[0-9]{10}$/,
    'date': '@datetime',
    'processDate': '@datetime',
    'overdue|0-1': 1
  }]
});
Mock.mock('/finance/promoterWithdrawalRecords?listStatus=3', {
  'tableData|10-50': [{
    'wasteBook': /^2018[0-9]{16}$/,
    'tel': /^1[0-9]{10}$/,
    'name': '@cname',
    'level|1-2': 1,
    'region': '@city(true)',
    'amount|1000-10000.2': 1,
    'wechat|0-1': /^1[0-9]{10}$/,
    'alipay': /^1[0-9]{10}$/,
    'date': '@datetime',
    'processDate': '@datetime',
    'overdue|0-1': 1
  }]
});
Mock.mock('/main/cascader', {
  "data": [
    {
      "pcCode": "1111111111111",
      "childCategory": [
        {
          "pcCode": "2222222222222222222",
          "childCategory": [
            {
              "pcCode": "3333333333333333333",
              "level": 3,
              "ppcCode": "02596560724924956471",
              "categoryName": "水果果果果"
            }
          ],
          "level": 2,
          "ppcCode": "02513410038505806773",
          "categoryName": "二级分类"
        }
      ],
      "level": 1,
      "ppcCode": "0",
      "categoryName": "添加一级分类"
    },
    {
      "pcCode": "02518503024429615194",
      "childCategory": [
        {
          "pcCode": "02516845776212945814",
          "childCategory": [
            {
              "pcCode": "02517529281392130592",
              "level": 3,
              "ppcCode": "02516845776212945814",
              "categoryName": "三级分类五"
            }
          ],
          "level": 2,
          "ppcCode": "02518503024429615194",
          "categoryName": "子分类五"
        }
      ],
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类五"
    },
    {
      "pcCode": "02513703424362826429",
      "childCategory": [
        {
          "pcCode": "02569213081690271638",
          "level": 2,
          "ppcCode": "02513703424362826429",
          "categoryName": "测试二级分类1"
        }
      ],
      "level": 1,
      "ppcCode": "0",
      "categoryName": "测试一级分类1-编辑"
    },
    {
      "pcCode": "02526043193550006406",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类九"
    },
    {
      "pcCode": "02515614932375704003",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类四"
    },
    {
      "pcCode": "02518876194798420088",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类六"
    },
    {
      "pcCode": "02599121759050821348",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类十一"
    },
    {
      "pcCode": "002",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类一"
    },
    {
      "pcCode": "02520180726111822296",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类八"
    },
    {
      "pcCode": "02520180724092929044",
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类七"
    },
    {
      "pcCode": "20180720415070015",
      "childCategory": [
        {
          "pcCode": "2018072041507387",
          "level": 2,
          "ppcCode": "20180720415070015",
          "categoryName": "子分类十二"
        }
      ],
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类十二"
    },
    {
      "pcCode": "2018072041507343",
      "childCategory": [
        {
          "pcCode": "02520180725091939024",
          "level": 2,
          "ppcCode": "2018072041507343",
          "categoryName": "子分类十三-2"
        },
        {
          "pcCode": "2018072041507580",
          "childCategory": [
            {
              "pcCode": "02520180725091801764",
              "level": 3,
              "ppcCode": "2018072041507580",
              "categoryName": "三级分类十三-4"
            },
            {
              "pcCode": "02520180724035515917",
              "level": 3,
              "ppcCode": "2018072041507580",
              "categoryName": "三级分类十三-5"
            },
            {
              "pcCode": "2018072042007991",
              "level": 3,
              "ppcCode": "2018072041507580",
              "categoryName": "三级分类十三-1"
            }
          ],
          "level": 2,
          "ppcCode": "2018072041507343",
          "categoryName": "子分类十三-1"
        }
      ],
      "level": 1,
      "ppcCode": "0",
      "categoryName": "分类十三"
    }
  ],
  "message": "success",
  "status": 0
});
