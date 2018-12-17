// const globalService = 'http://192.168.205.199:9001/gateway/userMessageForwarding?serviceCode=';//测试环境
const globalService = 'http://192.168.205.48:9001/gateway/userMessageForwarding?serviceCode=';//联调环境
// const globalService = 'http://api.mall.ytoxl.com:9001/gateway/userMessageForwarding?serviceCode=';  // 生产环境

const API = {
  login: {
    login: globalService + 'e_auth_businessLogin'  //登陆
  },
  common: {
     // uploadImg: "http://192.168.205.199:9001/gateway/file/upload/oss",                             // 上传图片  测试
    uploadImg: "http://192.168.205.48:9001/gateway/file/upload/oss",                             // 上传图片 联调
    batchUploadImg: "http://192.168.205.48:9001/gateway/file/batchUpload/oss",                   // 上传图片 联调
   // uploadImg: "http://api.mall.ytoxl.com:9001/gateway/file/upload/oss",                             // 上传图片 生产
    uploadImgService: "http://chuangxinyanfashiyanshi-oss02.oss-cn-hangzhou.aliyuncs.com/",      // 图片服务器
    // uploadImgService: "http://chuangxinyanfashiyanshi-shop.oss-cn-hangzhou.aliyuncs.com/",      // 图片服务器 生产
    getCode: "http://192.168.205.48:9001/gateway/kaptcha/getCode",                            // 获取验证码 联调
      // getCode: "http://192.168.205.199:9001/gateway/kaptcha/getCode",                            // 获取验证码 测试
    // getCode: "http://api.mall.ytoxl.com:9001/gateway/kaptcha/getCode",                            // 获取验证码 生产
    appWebService: window.location.host,                                                         // H5服务器(二维码跳转)
    getMenu: globalService + "e_auth_bussUserLoginRes",      // 获取菜单
  },
  index: {
    userUpdatepass: globalService + 'e_auth_updatepass',                                         // 修改密码
    queryLoginLog: globalService + 'e_auth_queryLoginLog',                                         // 登录日志
    queryAdvertisementList: globalService + 'e_content_queryAdvertisementList',                  // 广告列表
    batchDeleteAdvertisement: globalService + 'e_content_batchDeleteAdvertisement',              // 广告列表-删除
    addAdvertisement: globalService + 'e_content_addAdvertisement',                              // 广告列表-添加
    updateAdvertisement: globalService + 'e_content_updateAdvertisement',                        // 广告列表-编辑
    updateAdvertisementIsShow: globalService + 'e_content_updateAdvertisementIsShow',            // 广告列表-上下线
    queryAdvertisementDetail: globalService + 'e_content_queryAdvertisementDetail',              // 查询广告详情
    queryBusinessCashApplyRecord: globalService + "e_user_c_queryBusinessCashApplyRecord",    //提现管理
    addBusinessCashApply: globalService + "e_user_c_addBusinessCashApply",                    //提现管理-提现申请
    queryMerchantBalance: globalService + "e_user_c_queryMerchantBalance",                    //提现管理-查询商家可提现金额
    getBusinessBankInfo: globalService + "e_user_getBusinessBankInfo",                        //提现管理-查询商家银行卡信息
    insertBusinessBanInfo: globalService + "e_user_insertBusinessBanInfo",                    //提现管理-添加商家银行卡信息
    updateBusinessBanInfo: globalService + "e_user_updateBusinessBanInfo",                    //提现管理-更新商家银行卡信息
    businessGetCash: globalService + "e_settlement_businessGetCash",                          //提现管理-确认打款给商家
    isNameMatchCard: globalService + "e_user_isNameMatchCard",                                //提现管理-卡号与姓名是否匹配
    getBankNameByCardNo: globalService + "e_user_getBankNameByCardNo",                        //提现管理-根据卡号获取银行名称
    queryAreaList: globalService + "e_auth_queryAreaList",                                    //提现管理—查询区域列表
    queryBusinessTopStat: globalService + "e_statistics_queryBusinessTopStat",                // 商户平台首页销售统计
    queryBusinessWeekTopStat: globalService + "e_statistics_queryBusinessWeekTopStat",        // 商户平台首页-周信息统计
    orderRemind: globalService + "e_trade_queryOrderNoticeTotal",        // 订单提醒
  },
  goods: {
    recycleList: globalService + 'e_product_recycleQueryPage',                              // 商品回收站列表
    recycleRestore: globalService + "e_product_batchUpdateStatus",                            // 商品回收站还原操作
    categoryDropdown: globalService + "e_product_queryCategoryDropdown",                      // 商品分类下拉列表
    categoryAdd: globalService + "e_product_addCategory",                                     // 添加商品分类
    categoryDetail: globalService + "e_product_queryCategoryInfoByPcCode",                    // 商品分类详情
    addAllCategory: globalService + "e_product_addAllCategory",                    // 商品分类详情
    categoryUpdate: globalService + "e_product_updateCategory",                               // 编辑商品分类
    updateCategorySort: globalService + "e_product_updateCategorySort",                       // 上移、下移分类
    queryChildCategory: globalService + "e_product_queryChildCategory",                       // 获取子分类
    updateCategoryCode: globalService + "e_product_updateCategoryCode",                       // 转移分类商品
    deleteCategory: globalService + "e_product_batchDeleteCategory",                          // 删除商品分类
    queryPageCategory: globalService + "e_product_queryPageCategory",                         // 商品分类列表
    queryAllCategory: globalService + "e_product_queryAllCategory",                           // 商品分类列表所有层级
    UpdateCategoryStatus: globalService + "e_product_batchUpdateCategoryStatus",              // 批量启用停用分类
    productList: globalService + "e_product_queryPage",                                       // 商品列表
    productAdd: globalService + "e_product_batchAdd",                                         // 添加商品
    queryProductByCode: globalService + "e_product_queryProductByCode",                       // 根据SPU查询主商品
    queryProductByPprCode: globalService + "e_product_queryByPprCode",                        // 根据pprCode获取商品信息
    productBatchUpdateTags: globalService + "e_product_batchUpdateTags",                      // 批量修改爆品、预售
    updateProductByPprCode: globalService + "e_product_updateByPprCode",                      // 修改商品
    updateBySpu: globalService + "e_product_updateBySpu",                                     // 根据spu修改商品
    productSetConsignment: globalService + "e_product_setConsignment",                        // 商品设置分销
    deleteComment: globalService + "e_trade_deleteComment",                                   // 删除商品评价
    queryPcCommentByCode: globalService + "e_trade_queryPcCommentByCode",                     // 商品评价详情
    updateCommentStatus: globalService + "e_trade_updateComment",                             // 显示/隐藏商品详情--废弃
    showOrNotCommentsStatus: globalService + "e_trade_showOrNotComments",                     // 显示/隐藏商品详情
    queryPcCommentList: globalService + "e_trade_queryPcCommentList",                         // 商品评价信息列表
    replyComment: globalService + "e_trade_replyComment",                                     // 评价回复
    queryConsignmentProduct: globalService + "e_product_queryPageConsignmentProduct",         // 我要代销列表
    batchAddConsignment: globalService + "e_product_p_batchAdd",                              // 批量代销商家商品
    batchSubConsignment: globalService + "e_product_p_batchUpdateStatus",                     // 批量取消代销商家商品
    queryBusinessList: globalService + "e_user_m_queryBusinessList",                          // 获取全部商家
    updateVirtualSalesCount: globalService + "e_product_updateVirtualSalesCount",             // 商品列表设置虚拟销售量
    batchUpdateHomePage: globalService + "e_product_batchUpdateHomePage",                     // 商品列表设置首页推荐
    badWordFilter: globalService + "e_trade_badWordFilter",                                   // 评论回复敏感词过滤
    addProductVideo: globalService + "e_product_v_addProductVideo",                           // 视频库添加视频
    videoQueryPage: globalService + "e_product_v_queryPage",                                  // 视频库列表
    deleteProductVideo: globalService + "e_product_v_deleteProductVideo",                     // 删除视频信息
    updateProductVideoByPpvCode: globalService + "e_product_v_updateProductVideoByPpvCode",   // 更新视频信息
    queryProductVideoByPpvCode: globalService + "e_product_v_queryProductVideoByPpvCode",     // 获取视频详情信息
  },
  promotion: {
    couponList: globalService + "e_product_queryPageCoupon",                      //促销—优惠券列表
    addCoupon: globalService + "e_product_addCoupon",                             //促销-添加优惠券
    deleteCoupon: globalService + "e_product_deleteCoupon",                       //促销—删除优惠券
    queryCouponDetails: globalService + "e_product_g_updateCoupon",              //促销—查询优惠券详情
    updateCoupon: globalService + "e_product_p_updateCoupon",                     //促销—更新优惠券
    queryGoodsCategory: globalService + "e_product_queryTreeCategory",            //促销—添加优惠券列表下的商品分类
    // queryProduct: globalService+"e_product_queryTreeProduct",                //促销—添加优惠券列表下的指定商品
    queryClassName: globalService + "e_product_queryCategoryInfoByPcCode",        //促销—查询分类名称
    queryProductInfoByName: globalService + "e_product_queryProductInfoByName",   //促销—根据商品名称查询商品
    queryChildCategory: globalService + "e_product_queryChildCategory",           //促销—根据一级分类查询子类
    sendCoupon: globalService + "e_product_sendCoupon",                           //促销—发行优惠券
    queryUsageTypeDetail: globalService + "e_product_queryUsageTypeDetail",       //促销—查询具体的商品或类别名称
    queryCouponDetailSummary: globalService + "e_product_queryCouponDetailSummary", //促销——优惠券详情——优惠券汇总
    queryCouponDetailList: globalService + "e_product_queryDetailByPage",       //促销——优惠券详情——优惠券领取明细
  },
  distribution: {
    promoterList: globalService + "e_user_c_queryPromoterList",                                   // 分销—推广员列表
    addPromoter: globalService + "e_user_c_addPromoter",                                          // 分销—推广员列表-添加推广员
    queryCustomerCode: globalService + "e_user_c_queryCustomerCode",                              // 分销—推广员列表-添加推广员-关联手机号
    relieveRelationship: globalService + "e_user_c_relieveRelationship",                          // 分销—推广员列表-开除
    updatePromoterRemark: globalService + "e_user_c_updatePromoterRemark",                        // 分销—推广员列表-备注
    exportPromoterList: globalService + "e_user_c_exportPromoterList",                            // 分销—推广员列表-导出
    queryPromoterColumns: globalService + "e_user_c_queryPromoterColumns",                        // 分销—推广员列表-导出-列信息查询
    waitAuditPromoterList: globalService + "e_user_c_queryWaitAuditPromoterList",                 // 分销—推广员列表-待审核
    promoterAuditRemark: globalService + "e_user_c_promoterAuditRemark",                          // 分销—推广员列表-待审核-备注
    auditPromoter: globalService + "e_user_c_auditPromoter",                                      // 分销—推广员列表-待审核-审核
    exportWaitAuditPromoterList: globalService + "e_user_c_exportWaitAuditPromoterList",          // 分销—推广员列表-待审核-导出
    queryWaitAuditPromoterColumns: globalService + "e_user_c_queryWaitAuditPromoterColumns",      // 分销—推广员列表-待审核-导出-列信息查询
    promoteCustomerList: globalService + "e_user_c_queryPromoteCustomer",                // 分销—推广客户
    invitingRelationshipList: globalService + "e_user_c_queryInvitingRelationship",      // 分销—邀请关系
    addBusinessPoster: globalService + "e_user_c_addBusinessPoster",                     // 分销—推广海报
    queryBusinessPoster: globalService + "e_user_c_queryBusinessPoster",                 // 分销—查询推广海报
    generateBusinessPosterQRCode: globalService + "e_user_generateBusinessPosterQRCode_back", // 分销—生成二维码信息
    distributionSetting: globalService + "e_user_c_ruleSetup",                           // 分销— 设置
    queryRuleSetup: globalService + "e_user_c_queryRuleSetup",                           // 分销— 查询分销设置
    cashList: globalService + "e_user_c_queryCashApply",                                 // 分销—提现管理
    exportCashApplyBySellerList: globalService + "e_user_c_exportCashApplyBySellerList", // 分销—提现管理-导出
    queryCashApplyBySellerColumns: globalService + "e_user_c_queryCashApplyBySellerColumns", // 分销—提现管理-导出-列信息查询
    updateCashApplyBySeller: globalService + "e_user_c_updateCashApplyBySeller",         // 分销—提现管理-确认打款
    queryProductSharePage: globalService + "e_product_queryProductSharePage",            // 分销—商品列表
    queryTreeCategory: globalService + "e_product_queryTreeCategory",                    // 分销—商品列表-商品分类下拉列表
    takeProductShare: globalService + "e_product_takeProductShare",                      // 分销—商品列表-参加分销
    cancelProductShare: globalService + "e_product_cancelProductShare",                  // 分销—商品列表-取消参加分销
    updateProductShare: globalService + "e_product_updateProductShare",                  // 分销—商品列表-单个/批量商品设置分销比例
    queryPromoterOrder: globalService + "e_user_c_queryPromoterOrder",                   // 分销—推广订单
    exportPromoterOrderList: globalService + "e_user_c_exportPromoterOrderList",         // 分销—推广订单-导出
    queryPromoterOrderColumns: globalService + "e_user_c_queryPromoterOrderColumns",     // 分销—推广订单-导出-列信息查询
    queryPromoterAchievement: globalService + "e_user_c_queryPromoterAchievement",       // 分销—推广业绩
  },
  setting: {
    baseTemplateSetting: globalService + "e_user_setBaseTemplate",                            //设置—基础模板设置
    remindTempList: globalService + "e_third_queryRemindTempList",                            //设置—查询消息提醒模板列表
    queryRemindTempDetail: globalService + "e_third_queryRemindTempDetail",                   //设置—查询消息提醒模板详情
    updateRemindTemp: globalService + "e_third_updateRemindTemp",                             //设置—邮件是否发送
    ruleListPagination: globalService + "e_user_f_queryRuleListPagination",                   //设置—运费模板分页查询
    addRule: globalService + "e_user_f_addRule",                                              //设置—新增运费模板
    editRule: globalService + "e_user_f_updateRule",                                          //设置—编辑运费模板
    batchUpdateRuleStatus: globalService + "e_user_f_batchUpdateRuleStatus",                  //设置—批量更新运费模板状态
    queryFreightRuleDetail: globalService + "e_user_f_queryFreightRuleDetail",                //设置—根据运费模板编码查询单个运费信息
    updateRule: globalService + "e_user_f_updateRule",                                        //设置—编辑运费模板
    logisticsList: globalService + "e_third_logisticsList",                                   //设置—分页查询物流公司模板列表
    batchUpdateLogisticsStatus: globalService + "e-third_batchUpdateLogisticsStatus",         //设置—批量更新物流公司状态
    addLogistics: globalService + "e_third_addLogistics",                                     //设置—新增物流公司模板
    updateLogistics: globalService + "e-third-updateLogistics",                               //设置—更新物流公司模板
    queryLogisticsDetail: globalService + "e_third_logisticsDetail",                          //设置—查询物流公司模板详情
    queryBillContent: globalService + "e_user_u_queryBillContent",                            //设置—基础设置模板中的发票内容选项下拉框
    queryArea: globalService + "e_auth_queryAreaList",                                        //设置—查询区域列表
    queryAreaDetail: globalService + "e_auth_queryArea",                                      //设置—根据区域id查询具体城市
    querySetTemplateByCode: globalService + "e_user_querySetTemplateByCode",                  //设置—查询模板信息
    deleteLogistics: globalService + "e_third_deleteLogistics",                               //设置—卸载物流公司
    queryFreightList: globalService+"e_user_freight_list",                                    //设置—运费模板新
    queryAreaTreeList: globalService+"e_auth_queryAreaTreeList",                              //设置—查询区域树
    queryProListByFtCode: globalService+"e_product_queryProListByFtCode",                     //设置—运费模板查询商品列表
    addFreight: globalService+"e_user_freight_add",                                           //设置-添加运费模板
    deleteFreight: globalService+"e_user_freight_delete",                                     //设置—删除运费模板
    queryFreightDetail: globalService+"e_user_freight_detail",                                //设置—查询运费模板详情
    copyFreight: globalService+"e_user_freight_copy",                                         //设置—复制运费模板
    editFreight: globalService+"e_user_freight_modify",                                       //设置—修改运费模板
    updateStoreStatus: globalService+"e_user_st_updateStatus",                                //设置-是否开启门店自提
    queryStoreStatus: globalService+"e_user_st_queryStatus",                                  //设置—查询门店自提状态
    queryStoreList: globalService+"e_user_st_queryAddrList",                                  //设置—自提门店列表
    addStore: globalService+"e_user_st_addAddr",                                              //设置—新增门店自提地址
    updateStore: globalService+"e_user_st_updateAddr",                                        //设置—更新门店自提地址
    queryStoreDetail: globalService+"e_user_st_queryAddrDetail",                              //设置—查询门店详情
    importStoreList: globalService+"e_user_st_importAddrList",                                //设置—导入门店自提地址
  },
  order: {
    queryOrderSettings: globalService + "e_trade_queryOrderRule",                              //订单设置—查询订单设置
    orderSettings: globalService + "e_trade_addOrderRule",                                    //订单设置—订单设置
    queryReturnReasonList: globalService + "e_trade_queryReturnReasonList",                    //订单原因—退货原因设置列表
    addReturnReason: globalService + "e_trade_addReturnReason",                                //订单原因—新增退货原因
    updateReturnReasonStatus: globalService + "e_trade_updateReturnReasonStatus",              //订单原因—修改状态
    deleteBatchReturnReasons: globalService + "e_trade_batchDeleteReturnReason",               //订单原因—批量删除退货原因
    queryReturnReasonById: globalService + "e_trade_queryReturnReason",                        //订单原因—退货原因查询
    updateReturnReason: globalService + "e_trade_updateReturnReason",                          //订单原因—更新退货原因
    queryOrderList: globalService + "e_trade_querySellerOrders",                               //订单—订单列表
    orderDetails: globalService + "e_trade_queryOrderDetails",                                 //订单—订单详情
    updateSubOrderBySeller: globalService + "e_trade_updateSubOrderBySeller",                  //订单—关闭/删除订单
    deliveryOrder: globalService + "e_trade_deliveryGoodsr",                                   //订单—订单发货
    queryInvoiceInfo: globalService + "e_trade_queryInvoiceInfo",                              //订单—查询发票信息
    updateInvoiceInfo: globalService + "e_trade_updateInvoiceInfo",                            //订单—修改发票信息
    queryPostInfo: globalService + "e_trade_queryPostInfo",                                   //订单—查询收货人信息
    updatePostInfo: globalService + "e_trade_updatePostInfo",                                  //订单—修改收货人信息
    updatePostage: globalService + "e_trade_updatePostage",                                    //订单—修改费用信息
    cancelOrderBySeller: globalService + "e_trade_cancelOrderBySeller",                        //订单—取消订单
    remarkOrder: globalService + "e_trade_remarkSubOrder",                                     //订单—订单备注
    queryDeliverOrdersList: globalService + "e_trade_queryDeliverOrders",                      //订单确认—确认收货列表
    updateConfirmSubOrder: globalService + "e_trade_updateConfirmSubOrder",                    //订单确认—确认收货和一键确认收货
    queryReturnGoodsList: globalService + "e_trade_queryReturnGoodsPage",                     //订单退货—退货申请处理列表
    returnGoodsDetails: globalService + "e_trade_queryReturnGoodsDetail",                      //订单退货—退货申请详情
    returnGoodsPassed: globalService + "e_trade_returnGoodsPassed",                            //订单退货—确认退货
    returnGoodsFinished: globalService + "e_trade_returnGoodsFinished",                        //订单退货—确认收货
    batchDeleteReturnGoods: globalService + "e_trade_deleteReturnGoods",                       //订单退货—批量删除退货申请
    returnGoodsReject: globalService + "e_trade_returnGoodsReject",                            //订单退货—拒绝退货
    queryRefundList: globalService + "t_trade_u_queryPageRefund",                              //订单退款—退款申请处理列表
    refundDetails: globalService + "t_trade_u_queryRefundDetail",                              //订单退款—退款详情
    firmRefund: globalService + "t_trade_c_updateRefund",                                      //订单退款—确认退款
    batchDeleteRefund: globalService + "t_trade_u_batchDeleteRefund",                          //订单退款—已拒绝状态下批量删除
    queryDeliveryPageList: globalService + "e_trade_queryDeliveryPageList",                   //订单发货—电子面单发货列表
    queryAllLogistics: globalService + "e_third_queryAllLogistics",                             //订单发货—查询所有物流公司
    queryMerchantLogisticsList: globalService + "e_third_queryMerchantLogisticsList",          //查询商户物流
    queryDeliveryGoods: globalService + "e_trade_queryDeliveryGoods",                           //订单发货列表
    deliveryGoodsDetails: globalService + "e_trade_queryDeliveryGoodsInfo",                     //订单待发货详情
    singledDeliveryGoods: globalService + "e_trade_singledDeliveryGoods",                       //单条订单发货
    batchDeliveryGoods: globalService + "e_trade_batchDeliveryGoods",                           //批量发货
    trackOrder: globalService + "e_trade_queryLogisticsInfo",                                      //订单—订单跟踪
    queryOrderTrackDto: globalService + "e_trade_queryOrderTrackDto",                          //订单跟踪状态查询
    queryReturnRefund: globalService+"e_trade_c_queryReturnRefund",                            //订单—查询退款申请参数
    queryReturnGoodsRefund: globalService+"e_trade_queryReturnRefund",                        //订单-查询退货申请中你的退款申请参数
    queryLogTrack: globalService+"e_trade_queryLogTrack",
    thirdRefund: globalService+"e_pay_refund",
    remindDeliverGoods: globalService+"e_trade_remindDeliverGoods",                         //订单—提醒发货
    getDeliveryOrderFields: globalService+"e_trade_deliveryOrderFields",                      //订单—查询待发货表可导出的列信息
    exportDeliveryGoods: globalService+"e_trade_exportDeliveryGoods",                         //订单—导出待发货列表
    exportDeliveryOrderFields: globalService+"e_trade_exportDeliveryOrderFields",             //订单—快递单批量发货导出导出的列信息
    exportDeliveryOrderData: globalService+"e_trade_exportDeliveryOrderData",                 //订单—批量导出
    importDeliveryGoods: globalService+"e_trade_importDeliveryGoods",                         //订单——待发货订单批量导入
    storeSingleDeliveryGoods: globalService+"t_trade_u_storeSingleDeliveryGoods",               //订单—门店自提的订单发货
  },
  limitsAuth: {
    departmentList: globalService + "e_auth_roleList",   //部门列表
    departmentAdd: globalService + "e_auth_roleAdd",   //部门添加
    departmentEdit: globalService + "e_auth_roleModify",   //部门修改
    departmentById: globalService + "e_auth_roleQuery",   //部门查询byId
    departmentDel: globalService + "e_auth_batchDeleteRole",   //部门删除
    departmentChangeStatus: globalService + "e_auth_roleBatchStatus",   //部门启用、禁用
    departmentUserList: globalService + "e_auth_querypageuser",   //部门成员列表
    departmentUserAdd: globalService + "e_auth_adduser",   //部门成员添加
    departmentUserEdit: globalService + "e_auth_updateuser",   //部门成员修改
    departmentUserQuery: globalService + "e_auth_queryuser",   //部门成员查询
    departmentUserDel: globalService + "e_auth_deluser",   //部门成员删除
    departmentResList: globalService + "e_auth_findAllBussAuth",   //部门权限列表
    departmentSetAuth: globalService + "e_auth_roleAuth",   //部门权限分配
    departmentUserResList: globalService + "e_auth_bussUserAuthedRes",   //部门成员权限列表
    departmentUserSetAuth: globalService + "e_auth_grantUserAuth",   //部门成员权限分配
    departmentUserSetStatus: globalService + "e_auth_optbatchuser",   //部门成员启用、禁用
    resetPsd: globalService + "e_auth_resetpass",   //部门成员重置密码
  },
  message: {
    queryFeedbackPagination: globalService + "t_user_u_queryFeedbackPagination",          //消息——意见反馈列表
    batchDeleteFeedback: globalService + "e_user_u_batchDeleteFeedback",                  //消息——批量删除反馈信息
    queryFeedbackTypeByUserCode: globalService + "e_user_u_queryFeedbackTypeByUserCode",  //消息——查询反馈类型列表
    addFeedbackType: globalService + "e_user_u_addFeedbackType",                          //消息——新增意见反馈类型
    updateFeedbackType: globalService + "e_user_u_updateFeedbackType",                    //消息——禁用启用反馈类型
    deleteFeedbackType: globalService + "e_user_u_deleteFeedbackType",                    //消息——删除反馈类型
    batchDeleteFeedbackType: globalService + "e_user_u_batchDeleteFeedbackType",          //消息——批量删除反馈类型
    queryCustomerPagination: globalService + "e_user_f_queryCustomerPagination",          //消息——客户服务分页查询
    addCustomer: globalService + "e_user_f_addCustomer",                                  //消息——添加客户服务
    batchCustomerStatus: globalService + "e_user_f_batchCustomerStatus",                  //消息——批量启用停用客户服务
    batchDeleteCustomer: globalService + "e_user_f_batchDeleteCustomer",                  //消息——批量删除客服
    queryCustomerDetail: globalService + "e_user_f_queryCustomerDetail",                  //消息——查询客服详细信息
    modifyCustomer: globalService + "e_user_f_modifyCustomer",                            //消息——修改客服
  },
};


export default API
