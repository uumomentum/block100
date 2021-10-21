
setInterval(function(){
    var cur_artBox=document.querySelector(".s_card");
    var cur_more=document.querySelector("#artFoldBox");
    var cur_call=document.querySelector(".callApp_fl_btn");
    if(cur_artBox){
        cur_artBox.style.setProperty('height', 'auto', 'important');
    }
    if(cur_more){
        cur_more.remove();
    }
    if(cur_call){
        cur_call.remove();
    }
},30)
