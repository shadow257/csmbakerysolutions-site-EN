function errorHandler(){alert('mozfullscreenerror');}
document.documentElement.addEventListener('mozfullscreenerror',errorHandler,false);function toggleFullScreen(){if(!document.fullscreenElement&&!document.mozFullScreenElement&&!document.webkitFullscreenElement&&!document.msFullscreenElement){if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen();}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen();}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}else if(document.documentElement.msRequestFullscreen){document.documentElement.msRequestFullscreen();}}else{if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}}}
document.addEventListener('keydown',function(e){if(e.keyCode==13){toggleFullScreen();}},false);