Page({
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

  
})