setInterval(function(){
    var cur_artBox=document.querySelector("._2uqm7t0Q1edCEWGt25AMWI");
    var cur_more=document.querySelector("._31PCYTZEdFlOAgYNhhYJuN");
    var cur_more2=document.querySelector(".show-more_abCover__1OJqo");
    
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height', 'none', 'important');
    }
    if(cur_more){
        cur_more.style.setProperty('left', '-9999px', 'important');
    }
    if (cur_more2) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        cur_more2.dispatchEvent(e);
    }
},30)
