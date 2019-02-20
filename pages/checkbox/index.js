Page({
  data: {
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'TUR', name: '法国' },
    ],
    info:{
      name:'zhengxiaofeng'
    }
  },
  checkboxChange(event) {
    console.log('event', event)
  },

  onRemove(){
    var items = this.data.items
    this.setData({
      items:''
    })
    this.setData({
      items: items
    })
  },
})