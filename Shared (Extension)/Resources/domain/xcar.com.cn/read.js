setInterval(function(){
    var cur_artBox=document.querySelector(".content-show");
    var cur_more=document.querySelector(".download_bg");
    
    if(cur_artBox){
        cur_artBox.style.setProperty('height','auto','important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
