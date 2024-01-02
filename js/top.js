 //锚点
 var newtimer = null;
 window.onscroll = function() {
  if(document.documentElement.scrollTop > 1000) {
          document.querySelector('.box').style.display = 'block'
  }
  else {
      document.querySelector('.box').style.display = 'none'
  }
 }
  box.onclick = function(){
  cancelAnimationFrame(newtimer);
  newtimer = requestAnimationFrame(function fn(){
  var oTop = document.body.scrollTop || document.documentElement.scrollTop;
  if(oTop > 0){
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
      newtimer = requestAnimationFrame(fn);
  }else{
      cancelAnimationFrame(newtimer);
  } 
  });
  }