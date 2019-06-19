
Page({
  data: {
    totalsteps: 4,
    status: 1,
  },

  onLoad() {
    var a = 1;
    var b = 1
    console.log(a++)  
    console.log(++b)
    
    console.log(a)
    console.log(b)
   
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