setInterval(function(){
    var cur_more=document.querySelector(".openFullPost");
    if (cur_more) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        cur_more.dispatchEvent(e);
    }
},30)
