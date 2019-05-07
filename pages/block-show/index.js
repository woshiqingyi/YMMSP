Page({
  data: {
    UnclickedStyle:'background-color:white',
    AlreadyclickedStyle:'background-color:rgb(228, 228, 228)',
    messageTypeItems:[
      {
        Value:-1,
        Name:'提醒'
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

  onNews(event) {
    this.setData({
      NewsID: event.currentTarget.id
    })
  }, 
})