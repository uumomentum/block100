
var cur_artBox=document.querySelector("body");
var cur_more=document.querySelector(".appBg");
setInterval(function(){
    if(cur_artBox){
        cur_artBox.classList.remove("noScroll");
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
