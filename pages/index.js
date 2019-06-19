Page({
  data: {
    components:[
      {
        title:'基础组件',
        children:[
          {
            title:'DataDisplay',
            remark:'数据显示',
            url:'/pages/data-display/index'
          },
          {
            title: 'OptionList',
            remark: '选项列表',
            url: '/pages/option-list/index'
          },
          {
            title: 'InputStyle',
            remark: '输入框',
            url: '/pages/input-style/index'
          },
          { 
            title: 'Swiper',
            remark: '滑块视图',
            url: '/pages/swiper/index'
          },
          {
            title: 'Select',
            remark: '下拉框',
            url: '/pages/select/index'
          },
          {
            title: 'Classification',
            remark: '页面分类',
            url: '/pages/classification/index'
          },
          {
            title: 'VerificationCode',
            remark: '验证码',
            url: '/pages/verification-code/index'
          },
          {
            title: 'Checkbox',
            remark: '复选框',
            url: '/pages/checkbox/index'
          },
          {
            title: 'UploadPicture',
            remark: '上传图片',
            url: '/pages/upload-picture/index'
          },
          {
            title: 'Button',
            remark: '按钮',
            url: '/pages/button/index'
          },
          {
            title: 'PageInteract',
            remark: '界面交互',
            url: '/pages/page-interact/index'
          },
          {
            title: 'Histogram',
            remark: '柱状图',
            url: '/pages/histogram/index'
          }, 
          {
            title: 'RemarkTips',
            remark: '备注提示',
            url: '/pages/remark-tips/index'
          }, 
          {
            title: 'ModalInput',
            remark: '弹框输入',
            url: '/pages/modal-input/index'
          }, 
          {
            title: 'BlockShow',
            remark: '块状显示',
            url: '/pages/block-show/index'
          }, 
        ]
      },
      {
        title:'动画',
        children:[
          {
            title: 'CollectionAnimation',
            remark: '动态效果',
            url: '/pages/collection-animation/index'
          },
          {
            title: 'NoticeBar',
            remark: '公告栏',
            url: '/pages/notice-bar/index'
          },
          {
            title: 'Wave',
            remark: '波浪',
            url: '/pages/wave/index'
          }
        ]
      },
      {
        title: '进阶',
        children: [
          {
            title: 'OptionsList',
            remark: '店铺列表',
            url: '/pages/options-list/index'
          },
          {
            title: 'ChangeButton',
            remark: '修改按钮',
            url: '/pages/change-button/index'
          },
          {
            title: 'NavigatetoParameter',
            remark: '多传参',
            url: '/pages/navigateto-parameter/index'
          },
          {
            title: 'Judgment',
            remark: '判断',
            url: '/pages/judgment/index'
          },
          {
            title: 'Layout',
            remark: '布局',
            url: '/pages/layout/index'
          },
          {
            title: 'Experiment',
            remark: '试验',
            url: '/pages/experiment/index'
          },
          {
            title: 'ExperimentTwo',
            remark: '试验2',
            url: '/pages/experiment-two/index'
          },
          {
            title: 'ClassificationList',
            remark: '商品分类',
            url: '/pages/classification-list/index'
          },
          {
            title: 'ShoppingCart',
            remark: '购物车',
            url: '/pages/shopping-cart/index'
          }, 
          {
            title: 'Steps',
            remark: '步骤条',
            url: '/pages/steps/index'
          },
          {
            title: 'Progress',
            remark: '进度条',
            url: '/pages/progress/index'
          }, 
        ]
      }
    ]
  },

  onLoad: function (options) {
    console.log('components', this.data.components)
  },
  onbutton(event){
    console.log('event', event.currentTarget.id)
    this.setData({
      url: event.currentTarget.id
    })
    wx.navigateTo({
      url: this.data.url,
    })
  },
})