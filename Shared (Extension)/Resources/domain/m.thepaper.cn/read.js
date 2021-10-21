
setInterval(function(){
    var cur_more=document.querySelector("#clickForMore");
    if (cur_more) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        cur_more.dispatchEvent(e);
    }
},30)
