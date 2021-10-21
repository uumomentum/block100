setInterval(function(){
    var cur_artBox=document.querySelector(".artiCon");
    var cur_more=document.querySelector("#js-continue-reading");
    if(cur_artBox){
        cur_artBox.classList.remove("min_height");
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
