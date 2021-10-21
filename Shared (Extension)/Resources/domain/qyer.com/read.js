
setInterval(function(){
    var cur_artBox=document.querySelector(".detail_wrap");
    var cur_more=document.querySelector("#detail_con .unfold");
    if(cur_artBox){
        cur_artBox.style.setProperty('height','auto','important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
