Page({
  data: {
    AllOptions: false,
    SelectStoreItems: [],
    StoreItems: [
      {
        ID:1,
        StoreName:'店铺1',
        CreateTime:'2017',
        Amount:'1500'
      },
      {
        ID:2,
        StoreName: '店铺2',
        CreateTime: '2018',
        Amount: '2000'
      },
      {
        ID:3,
        StoreName: '店铺3',
        CreateTime: '2019',
        Amount: '2500'
      },
    ],//全部选择的店铺
  },

  optionAllStores(event) {
    this.setData({
      AllOptions: !this.data.AllOptions
    })
    if (this.data.AllOptions) {  //全选 选项
      var SelectStoreItems = []
      for (var i = 0; this.data.StoreItems.length > i; i++) {
          SelectStoreItems.push(this.data.StoreItems[i])
      }
      this.setData({
        SelectStoreItems: SelectStoreItems
      })
    } else {      //取消 选项
      this.setData({
        SelectStoreItems: []
      })
    }
  },

  optionStore(event) {
    var IDItems = event.detail.value
    var SelectStoreItems = []
    for (var i = 0; IDItems.length > i; i++) {
      SelectStoreItems.push(this.data.StoreItems.filter(a => a.ID == IDItems[i])[0])
    }
    this.setData({
      SelectStoreItems: SelectStoreItems
    })
  },

  onNextPutForward() {
    console.log('xuan', this.data.SelectStoreItems)
  },
})