
Component({
  
  properties: {
    myProperty1: { // 属性名
      type: Object,
    },
  },

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

 
  data: {
    SwiperID: 0,
    SwiperStyle: 'border-bottom:1rpx red solid;color:red',
    SwiperItems: [
      {
        Value: 0,
        Name: '界面1'
      },
      {
        Value: 1,
        Name: '界面2'
      },
      {
        Value: 2,
        Name: '界面3'
      },
      {
        Value: 3,
        Name: '界面4'
      },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMove(event) {
      this.setData({
        SwiperID: event.detail.current
      })
    },

    changePage(event) {
      this.setData({
        SwiperID: event.currentTarget.id
      })
    },
  }
})


