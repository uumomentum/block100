
setInterval(function(){
    var cur_artBox=document.querySelector(".hidden-content");
    var cur_more=document.querySelector(".lookall-box");
    if(cur_artBox){
        cur_artBox.classList.remove("hide");
    }
    if(cur_more){
        cur_more.style.display="none";
    }
},30)
