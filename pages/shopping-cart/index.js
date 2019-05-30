
Page({
  data: {
    number:1
  },

  onLoad: function (options) {
    
  },

  reduceNumber(){
    var number = --this.data.number
    if (number <= 1) number = 1
    this.setData({
      number: number
    })
  },

  addNumber(){
    var number = ++this.data.number
    this.setData({
      number: number
    })
  }
})