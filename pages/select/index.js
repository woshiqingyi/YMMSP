
Page({
  data: {
    Management:[
      {
        ManagementName:'网络'
      },
      {
        ManagementName: '科技'
      },
      {
        ManagementName: '外贸'
      },
      {
        ManagementName: 'p2p'
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