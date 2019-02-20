
Page({

  data: {
    FirstPageColor: "1rpx red solid",
    FirstPageWord: "red",
    SecondPageColor: "",
    SecondPageWord: "",
    index: "0",
  },

  onFirstPage(event) {
    console.log("event", event.target.id)
    this.setData({
      FirstPageColor: "1rpx red solid",
      FirstPageWord: "red",
      SecondPageColor: "",
      SecondPageWord: "",
      ThirdPageColor: '',
      ThirdPageWord: '',
      index: "0"
    })
  },

  onSecondPage(event) {
    console.log("event", event.target.id)
    this.setData({
      FirstPageColor: "",
      FirstPageWord: "",
      SecondPageColor: "1rpx red solid",
      SecondPageWord: "red",
      ThirdPageColor: '',
      ThirdPageWord: '',
      index: "1"
    })
  },

  onThirdPage(event){
    this.setData({
      FirstPageColor: "",
      FirstPageWord: "",
      SecondPageColor: "",
      SecondPageWord: "",
      ThirdPageColor:'1rpx red solid',
      ThirdPageWord:'red',
      index: "2"
    })
  },

  onMove(event) {
    console.log("event", event.detail.current)
    if (event.detail.current == 0) {
      this.setData({
        FirstPageColor: "1rpx red solid",
        FirstPageWord: "red",
        SecondPageColor: "",
        SecondPageWord: "",
        ThirdPageColor: '',
        ThirdPageWord: '',
      })
    }

    if (event.detail.current == 1) {
      this.setData({
        FirstPageColor: "",
        FirstPageWord: "",
        SecondPageColor: "1rpx red solid",
        SecondPageWord: "red",
        ThirdPageColor: '',
        ThirdPageWord: '',
      })
    }

    if (event.detail.current == 2) {
      this.setData({
        FirstPageColor: "",
        FirstPageWord: "",
        SecondPageColor: "",
        SecondPageWord: "",
        ThirdPageColor: '1rpx red solid',
        ThirdPageWord: 'red',
      })
    }
  },

})