import Mock from 'mockjs'

Mock.mock('/api/books', {
  'books|1-10': [{
    'id|+1': 1,
    'title': '@pick(["语文", "数学", " 英文", "历史"])',
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
