setInterval(function(){
    var cur_artBox=document.querySelector("#articleContent");
    var cur_more=document.querySelector(".fold-arrow");
    var cur_decorate=document.querySelector(".fold-mask");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_decorate){
        cur_decorate.remove();
    }
},30)
