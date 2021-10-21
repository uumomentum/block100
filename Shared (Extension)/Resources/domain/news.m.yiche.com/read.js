
setInterval(function(){
    var cur_artBox=document.querySelector(".news-fold");
    var cur_more=document.querySelector(".news-more");
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height', 'none', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
