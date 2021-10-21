setInterval(function(){
    var cur_artBox=document.querySelector("#article_body");
    var cur_more=document.querySelector(".collapseWrapper");
    var cur_call=document.querySelector(".mask");
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height', 'none', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
},30);