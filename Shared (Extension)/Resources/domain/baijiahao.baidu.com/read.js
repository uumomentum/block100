setInterval(function(){
    var cur_artBox=document.querySelector(".mainContent");
    var cur_more=document.querySelector(".oPadding");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
},30)
