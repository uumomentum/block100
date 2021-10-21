setInterval(function(){
    var cur_artBox=document.querySelector(".main_content-3kd7Vb02");
    var cur_more=document.querySelector(".tip-3pbTWukM");
    var cur_decorate=document.querySelector(".more-2CHKzqq5");
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
