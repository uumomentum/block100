setInterval(function(){
    var cur_artBox=document.querySelector(".content");
    var cur_more=document.querySelector(".check-more");
    var cur_call=document.querySelector(".bottom-bar");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
},30)
