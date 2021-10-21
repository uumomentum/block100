setInterval(function(){
    var cur_artBox=document.querySelector(".textPageCont");
    var cur_more=document.querySelector(".textPageCont-footer");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
