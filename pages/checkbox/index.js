Page({
  data: {
    Values:'SHUZHI',
    items: [
      { value: 'USA', name: '美国' },
      { value: 'CHN', name: '中国' },
      { value: 'BRA', name: '巴西' },
      { value: 'JPN', name: '日本' },
      { value: 'ENG', name: '英国' },
      { value: 'TUR', name: '法国' },
    ],
  },
  checkboxChange(event) {
    console.log('event', event)
  },

  onTerms(event){
    this.setData({
      Terms:event.detail.value
    })
    if(this.data.Terms.length == 0){
      console.log('没勾选')
    }
    if (this.data.Terms.length !== 0) {
      console.log('勾选')
    }
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