
setInterval(function(){
    var cur_artBox=document.querySelector(".exp-content-container");
    var cur_more=document.querySelector(".read-whole-mask");
    
    if(cur_artBox){
        cur_artBox.classList.remove('fold');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)


