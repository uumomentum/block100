setInterval(function(){
    var cur_artBox=document.querySelector(".article_content");
    var cur_more=document.querySelector(".readall_box");
    var cur_call=document.querySelector(".feed-Sign-span");
    var cur_decorate=document.querySelector(".weixin-shadowbox");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_decorate){
        cur_decorate.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
