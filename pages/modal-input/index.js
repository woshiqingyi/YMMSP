Page({
  data: {
    HiddenModalInput:true //初始化默认隐藏,false显示弹框
  },

  clickCancel(){  
    this.setData({
      HiddenModalInput:true
    })
  },

  clickConfirm(){ 
    //条件+
    this.setData({
      HiddenModalInput: true
    })
  },

  inputModal(){  
    this.setData({
      HiddenModalInput: false
    })
  },

})