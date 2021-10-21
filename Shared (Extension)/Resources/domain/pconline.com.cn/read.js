
setInterval(function(){
    var cur_artBox=document.querySelector(".art-content");
    var cur_more=document.querySelector(".add_artilce_handle");
    
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height','none','important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
