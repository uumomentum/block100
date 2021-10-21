setInterval(function(){
    var cur_artBox=document.querySelector(".main-article");
    var cur_more=document.querySelector(".get-all-article");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
