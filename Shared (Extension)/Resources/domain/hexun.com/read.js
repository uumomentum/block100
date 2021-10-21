setInterval(function(){
    var cur_artBox=document.querySelector(".article");
    var cur_more=document.querySelector(".article-open");
    var cur_decorate=document.querySelector(".article-mask");
    if(cur_artBox){
        cur_artBox.style.setProperty('height','auto','important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_decorate){
        cur_decorate.remove();
    }
},30)
