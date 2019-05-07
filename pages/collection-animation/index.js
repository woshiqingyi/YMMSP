Page({
  data: {
    IsImgurl:false,
    Imgurl:'/image/Collection.png',
    ImgurlSuccess:'/image/CollectionSuccess.png',
  },

  onLoad: function (options) {

  },

  changeImage(){
    this.setData({
      IsImgurl:!this.data.IsImgurl
    })
  }
})