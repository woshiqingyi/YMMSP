Page({

  data:{
    hiddenmodalput: true,
  },
  onLoad: function () {
    var abc = null;
    console.log(abc)
    if(abc === null){
      console.log('jieguo',!abc)
    }




    var context = wx.createContext();
    var array = [10, 10, 10, 10];
    var colors = ["#ff5000", "#f5ff05", "#ff0000", "#00ff00"];
    var total = 0;
    for (var index = 0; index < array.length; index++) {
      total += array[index];
    }
    var point = { x: 100, y: 100 };
    var radius = 60;

/*
    context.beginPath();
      context.arc(point.x, point.y, radius,0, array[0] / total * 2 * Math.PI, false);
      context.lineTo(point.x, point.y);
      context.setFillStyle(colors[0]);
      context.fill();
      context.closePath();
*/
   
   for (var i = 0; i < array.length; i++) {
      context.beginPath();
      var start = 0;
      if (i >0) {
        for (var j = 0; j < i; j++) {
          start += (array[j] / total) * 2 * Math.PI;
        }
      } 
     
      
      context.arc(point.x, point.y, radius, start, array[i] / total * 2 * Math.PI, false);
      context.lineTo(point.x, point.y);
      context.setFillStyle(colors[i]);
      context.fill();
      context.closePath();
    }


    wx.drawCanvas({
      canvasId: 'mypie',
      actions: context.getActions()
    });



  },






  
 

})

