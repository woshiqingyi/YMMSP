Page({

  data:{
    hiddenmodalput: true,
  },
  onLoad: function () {
    var abc = null;
    console.log(abc)
    if(abc === null){
      console.log('jieguo',!abc)
    }




    var context = wx.createContext();
    var array = [10, 10, 10, 10];
    var colors = ["#ff5000", "#f5ff05", "#ff0000", "#00ff00"];
    var total = 0;
    for (var index = 0; index < array.length; index++) {
      total += array[index];
    }
    var point = { x: 100, y: 100 };
    var radius = 60;

/*
    context.beginPath();
      context.arc(point.x, point.y, radius,0, array[0] / total * 2 * Math.PI, false);
      context.lineTo(point.x, point.y);
      context.setFillStyle(colors[0]);
      context.fill();
      context.closePath();
*/
   
   for (var i = 0; i < array.length; i++) {
      context.beginPath();
      var start = 0;
      if (i >0) {
        for (var j = 0; j < i; j++) {
          start += (array[j] / total) * 2 * Math.PI;
        }
      } 
     
      
      context.arc(point.x, point.y, radius, start, array[i] / total * 2 * Math.PI, false);
      context.lineTo(point.x, point.y);
      context.setFillStyle(colors[i]);
      context.fill();
      context.closePath();
    }


    wx.drawCanvas({
      canvasId: 'mypie',
      actions: context.getActions()
    });



  },






  showDialogBtn: function () {

    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
    this.hideModal();
  },






  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  }


})

