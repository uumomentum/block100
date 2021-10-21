
setInterval(function(){
    var cur_artBox=document.querySelector(".collapse-free-content");
    var cur_more=document.querySelector(".collapse-tips");
    var cur_call=document.querySelector(".call-app-btn");
    var cur_decorate=document.querySelector(".collapse-free-content:after");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
    if(cur_decorate){
        cur_decorate.remove();
    }
},30)
