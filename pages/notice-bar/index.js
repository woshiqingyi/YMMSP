
Page({
  data: {
    content_t: '测测测测测测测测测测测测测测测测测测测测测测测测sss测测测测测测测sss测测测测测测测sss',//内容
    size: 15,//宽度即文字大小
    marqueeW: 0,
    moveTimes: 8,//一屏内容滚动时间为8s
    allT: "0s"
  },
  onLoad: function () {
    var screenW = wx.getSystemInfoSync().windowWidth;//获取屏幕宽度
    var contentW = this.data.content_t.length * this.data.size;//获取文本宽度（大概宽度）
    var allT = (contentW / screenW) * this.data.moveTimes;//文字很长时计算有几屏
    allT = allT < 8 ? 8 : allT;//不够一平-----最小滚动一平时间
    this.setData({ marqueeW: -contentW + "px", allT: allT + "s" });
  }
})