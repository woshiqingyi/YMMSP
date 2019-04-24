Page({


  data: {
    components:[
      {
        First:'First',
        Second:'Second',
        Third:'Third',
        Fourth:'Fourth',
        Fifth:'Fifth'
      },
      {
        First: 'First',
        Second: 'Second',
        Third: 'Third',
        Fourth: 'Fourth',
        Fifth: 'Fifth'
      },
      {
        First: 'First',
        Second: 'Second',
        Third: 'Third',
        Fourth: 'Fourth',
        Fifth: 'Fifth'
      }
    ]
  },


  onLoad: function (event) {
    console.log('components', this.data.components)
    console.log('event', event)
  },

  
})