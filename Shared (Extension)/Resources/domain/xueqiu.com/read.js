setInterval(function(){
    var cur_artBox=document.querySelector(".index_status__content--textoverflow_34V");
    var cur_more=document.querySelector(".index_content__expand_ipad_10b");
    var cur_call=document.querySelector("#openapp__fix");
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height','none','important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
},30)
