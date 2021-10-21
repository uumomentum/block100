
setInterval(function(){
    var cur_artBox=document.querySelector(".article-content");
    var cur_more=document.querySelector(".i_article__footer");
    var cur_decorate=document.querySelector(".i_article .article-content:after");
    var cur_more2=document.querySelector(".i_article__footer");
    
    if (cur_more2) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        cur_more2.dispatchEvent(e);
    }
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height','none','important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_decorate){
        cur_artBox.style.setProperty('min-height','auto','important');
    }
    
},30)
