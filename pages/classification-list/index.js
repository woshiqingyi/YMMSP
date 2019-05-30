Page({
  data: {
    UnclickedStyle: 'background-color:white',
    AlreadyclickedStyle: 'background-color:rgb(228, 228, 228)',
    messageTypeItems: [
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: 1,
        Name: '账户'
      },
      {
        Value: -1,
        Name: '提醒'
      },
      {
        Value: 0,
        Name: '活动'
      },
      {
        Value: 1,
        Name: '账户'
      },
    ],
  },

onLoad(){
  var that = this;
  wx.getSystemInfo({
    success: function (res) {
      console.log(res);
      // 屏幕宽度、高度
      console.log('height=' + res.windowHeight);
      that.setData({
        windowHeight: res.windowHeight,
      })
    }
  })
},

  onNews(event) {
    this.setData({
      NewsID: event.currentTarget.id
    })
  },
})