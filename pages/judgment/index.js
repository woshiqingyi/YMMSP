Page({
  data: {
    AnalogData1:[],
    AnalogData1_1:[
      {
        AnalogData1: 'AnalogData1'
      }
    ],
    AnalogData2:'',
    AnalogData2_1: 'AnalogData2_1',
    AnalogData3:null //null不能用length来判断
  },


  onLoad: function (options) {

    if (this.data.AnalogData1){
      console.log('AnalogData1_1')
    } 
    if (this.data.AnalogData1.length){
      console.log('AnalogData1_2')
    } 
    if (this.data.AnalogData1=='') {
      console.log('AnalogData1_3')
    }
    if (this.data.AnalogData1_1){
      console.log('AnalogData1_4')
    }
    if (this.data.AnalogData1_1.length) {
      console.log('AnalogData1_5')
    }
    if (this.data.AnalogData1_1 == '') {
      console.log('AnalogData1_6')
    }

    
    if (this.data.AnalogData2){
      console.log('AnalogData2_1')
    } 
    if (this.data.AnalogData2.length) { 
      console.log('AnalogData2_2')
    } 
    if (this.data.AnalogData2=='') {
      console.log('AnalogData2_3')
    }
    if (this.data.AnalogData2_1) {
      console.log('AnalogData2_4')
    }
    if (this.data.AnalogData2_1.length) {
      console.log('AnalogData2_5',)
    }
    if (this.data.AnalogData2_1 == '') {
      console.log('AnalogData2_6')
    }

    if (this.data.AnalogData3) {
      console.log('AnalogData3_1')
    }
    if (this.data.AnalogData3 == '') {
      console.log('AnalogData3_3')
    }

    /*结论：
    1.当数据是字符串 直接当条件或者是''或者是length
    2.数据是数组可以用length 或者''，不能直接当条件
    3.数据有NUll,不能用length,和'' 当条件,是false
    */
  },
})



