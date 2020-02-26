
Page({
  data: {
    Management:[
      {
        ManagementName:'网络',
        Code:'1'
      },
      {
        ManagementName: '科技',
        Code: '1'
      },
      {
        ManagementName: '外贸',
        Code: '1'
      },
      {
        ManagementName: 'p2p',
         Code:'1'
      }
    ],
  },

  chooseOption(event){
    console.log('event', event)
    this.setData({
      ManagementIndexValue: event.detail.value
    })
  },
})