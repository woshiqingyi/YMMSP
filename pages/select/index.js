
Page({
  data: {
    woshiqingyi:'item.name',
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
    Occupation:[
      {
        OccupationName:'教师'
      },
      {
        OccupationName: 'IT'
      },
      {
        OccupationName: '金融'
      },
      {
        OccupationName: '公务员'
      }
    ],
    Occupation1: [
      {
        OccupationName: '教师'
      },
      {
        OccupationName: 'IT'
      },
      {
        OccupationName: '金融'
      },
      {
        OccupationName: '公务员'
      }
    ],
    
  },

  
  onManagement(event){
    console.log('event', event)
    this.setData({
      ManagementIndexValue: event.detail.value
    })
  },

  onOccupation(event) {
    console.log('event', event)
    this.setData({
      OccupationIndexValue: event.detail.value
    })
  },


  onLoad: function (options) {
    console.log('Management', this.data.Management)
  },

 
  
})