
setInterval(function(){
    var cur_artBox=document.querySelector(".infoMainContentWrap");
    var cur_more=document.querySelector(".unfold-field");
    if(cur_artBox){
        cur_artBox.style.setProperty('height','auto','important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
