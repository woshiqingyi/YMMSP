Page({
  data: {
    HotSearch:false,
    SearchRight:''
  },
  onLoad: function (options) {
    
  },
  showHotSearch(){
    this.setData({
      HotSearch:true,
      SearchLength:570
    })
  },
  disappearHotSearch(){
    this.setData({
      HotSearch: false,
      SearchLength:680
    })
  }
})