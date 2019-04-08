
Page({


  data: {
   
  },

  onLoad: function (options) {

  },

  onStoreContent(event) {
    var PlatformCode = this.data.StoreListItems.filter(a => a.ID == event.currentTarget.id)[0].PlatformCode
    console.log('PlatformCode', PlatformCode)
    wx.navigateTo({
      url: 'store-content/index?id=' + event.currentTarget.id + '&PlatformCode=' + PlatformCode,
    })
  }


})