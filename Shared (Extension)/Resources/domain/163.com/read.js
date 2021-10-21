setInterval(function(){
    var cur_artBox=document.querySelector("main article");
    var wy_page=document.querySelectorAll(".js-page");
    var cur_more=document.querySelector(".show_article");
    if(cur_artBox){
        cur_artBox.style.setProperty('max-height', 'none', 'important');
    }
    if(wy_page){
        wy_page.forEach(function(item,index){
            item.classList.add("on");
        })
    }
    if(cur_more){cur_more.remove();}
},30)
