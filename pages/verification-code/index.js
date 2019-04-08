Page({

  data: {
   CodeName:'获取验证码',
   Count:'',
   Counting: false,
   isShowInfo: false
  },

  methods: {
    __hideInfo: function () {
      this.setData({
        isShowInfo: true
      })
    }
  },

  onGetCode(){
    var that = this;
    if (!that.data.Counting==true) {  
      /*达到要求同条件一起发送*/
      that.setData({
        Count: 5
      })
      countDown(that, that.data.Count);
    } 
  },  
})

function countDown(that, count) {
  if (count == 0) {
    that.setData({
      CodeName: '获取验证码',
      Counting: false
    })
    return;
  }
  that.setData({
    Counting: true,
    CodeName: count + '秒后获取',
  })
  setTimeout(function () {
    count--;
    that.setData({
      Count: count
    })
    countDown(that, count);
  }, 1000);
}
/*文本居中，用view， text-align: center*/

























