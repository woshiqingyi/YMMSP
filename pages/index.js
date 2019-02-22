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
          
        ]
      },
      {
        title: '核心组件2',
        children: [
          {
            title: 'button',
            remark: '按钮2',
            url: "3"
          },
          {
            title: 'button',
            remark: '按钮2',
            url: "4"
          }
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