setInterval(function(){
    var cur_artBox=document.querySelector(".note-content");
    var cur_more=document.querySelector(".oia-readall");
    if(cur_artBox){
        cur_artBox.style.setProperty('min-height','auto','important');
        cur_artBox.style.setProperty('max-height','none','important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
