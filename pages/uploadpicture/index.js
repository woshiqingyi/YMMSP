
Page({


  data: {

  },


  onLoad: function (options) {

  },

  onClick(){
    var that =this;
    console.log("woshiqingyi")
    wx.chooseImage({
      success: function(res) {
        that.setData({
          picture: res.tempFilePaths[0]
        })
        wx.uploadFile({
          url: '',
          filePath: that.data.picture,
          header:'',
          name: '',
          success(res){
            console.log('res',res)
          }
        })
      },
    })
  },

  
})