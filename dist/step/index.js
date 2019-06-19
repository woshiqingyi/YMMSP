
Component({
  properties: {
    totalsteps: { // 总步骤
      type: String,
      value: ''
    },
    status: { // 状态
      type: String,
      value: ''
    },
    step: { // 状态
      type: String,
      value: ''
    },
  },

  relations: {
    'steps/index': {
      type: 'parent',
    },
  },


  data: {
    step1: 1,
    step2: 2,
    step3: 3,
    step4: 4,
    step5: 5,
    totalsteps: 4,
    status: 2,
  },

  /**
   * 组件的方法列表
   */


  ready() {
    if (this.data.totalsteps == 2) {
      this.setData({
        linewidth: 120,
        iconimage: 33,
        contentwidth: 250
      })
    } else if (this.data.totalsteps == 3) {
      this.setData({
        linewidth: 65,
        iconimage: 33,
        contentwidth: 200
      })
    } else if (this.data.totalsteps == 4) {
      this.setData({
        linewidth: 45,
        iconimage: 33,
        contentwidth: 150
      })
    }
  },
  
   methods: {
    updateCurrent(opts = {}) {
      const totalsteps = this.data.totalsteps
      const status = this.data.status
      const options = Object.assign({
        totalsteps,
        status
      }, opts)
    }
   },

   attached() {
    this.updateCurrent(this.data)
  },

})




