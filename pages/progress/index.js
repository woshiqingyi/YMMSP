Page({
  data: {
    TotalWidth:600,
    Width:100,
    Percentage1:1
  },

  onLoad: function (options) {
    if (this.data.Percentage1<=1){
      this.setData({
        Percentage:1
      })
    }else{
      this.setData({
        Percentage: this.data.Percentage1
      })
    }
  },
})