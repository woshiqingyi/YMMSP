
Page({
  data: {
    totalsteps: 4,
    status: 1,
    data1:[],
    data2:{},
    data3:''
  },

  onLoad() {

    console.log('55555',this.data.data2)
    if (w){
      
      console.log('zhen')
    }else{
      console.log('jia')
    }
    var a = 1;
    var b = 1
    console.log(a++)  
    console.log(++b)
    
    console.log(a)
    console.log(b)
    console.log('111', typeof (this.data.data1))
    console.log('222', typeof (this.data.data2))
    console.log('333', typeof (this.data.data3))
  },

  onButton (e) {
    console.log('11111')
  },

  add(){
    console.log('status',this.data.status)
    this.setData({
    
      status:++this.data.status
    })
  }
})