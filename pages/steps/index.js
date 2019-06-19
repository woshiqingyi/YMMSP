
Page({
  data: {
    step1:1,
    step2:2,
    step3:3,
    step4:4,
    step5:5,
    
    totalsteps:3,
    status:2,
  },
  onLoad(){
    if (this.data.totalsteps == 2){
      this.setData({
        linewidth: 120,
        iconimage: 33,
        contentwidth: 250
      })
    } else if (this.data.totalsteps == 3){
      this.setData({
        linewidth:65,
        iconimage:33,
        contentwidth: 200
      })
    } else if (this.data.totalsteps == 4) {
      this.setData({
        linewidth:45,
        iconimage:33,
        contentwidth:150
      })
    }
  }

})