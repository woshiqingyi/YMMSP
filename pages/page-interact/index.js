Page({
 data:{
   
 },

  onLoad(){
   
    this.onTo('wefifjhiefeififjfijf'),
    this.f("yykh")
  },
  
  onShowActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log('成功',res.tapIndex)
      },
      fail(res) {
        console.log('失败',res.errMsg)
      }
    })
  },

  onHideLoading(){
    console.log("隐藏")
    wx.hideLoading({

    })
  },

  onShowLoading(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
  },

  onShowToast(){
    wx.showToast({
      title: '',
      icon: 'error',
      duration: 2000,
      mask:true,
      success(){
       
      }
    })
  },

  onShowModal(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  onTo(str){
    var arr = str.split(""); 
    console.log('arr', arr)
    var obj = {};
  },

   f(str){
    var arr = str.split("");   
    var obj = {};
    for(var i = 0; i<arr.length;i++){
    var val = arr[i];    /*每个数组元素用val变量接收*/
    
   
    if (obj[val] && obj[val].value == val) {     /*如果obj[val]对象存在并且obj[val]对象的value值为val，则把obj[val]对象的count值加1*/
    obj[val].count = ++obj[val].count;
      
  } else {
    obj[val] = {};     /*创建obj[val]这个对象*/
    obj[val].value = val;     /*obj[val]对象的value值为val*/
    obj[val].count = 1;      /*obj[val]对象的count值为1*/
  }
}
console.log('key',key)
for (var key in obj) {      /*创建对象后循环遍历*/
  console.log(obj[key].value + '=' + obj[key].count);     /*控制台输出值*/
}
}
})