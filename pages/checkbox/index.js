Page({
  data: {
    TermValue:'SHUZHI',
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
    console.log('event', event.detail.value)
  },

  chooseTerms(event){
    this.setData({
      Terms:event.detail.value
    })
    if(this.data.Terms.length == 0){
      console.log('没勾选')
      return;
    }
    if (this.data.Terms.length !== 0) {
      console.log('勾选')
      return;
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

  optionAll(){
    var options = []
    for (var i=0; this.data.items.length>i;i++){
      options.push(
        this.data.items[i].value
      )
      console.log('11', options)
    }
  }

})