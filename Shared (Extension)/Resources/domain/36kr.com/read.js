setInterval(function(){
    var cur_artBox=document.querySelector("#body-content");
    var cur_more=document.querySelector(".article-goapp");
    var cur_call=document.querySelector(".open-app-fixed");
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height', 'none', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
},30)
