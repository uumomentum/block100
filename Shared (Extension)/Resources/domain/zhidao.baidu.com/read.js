//百度知道
var sw = document.documentElement.clientWidth;
var sh = document.documentElement.clientHeight;   
if(sw >= 768 && sh >= 768 && navigator.userAgent.indexOf("iPhone")==-1){//pad
    setInterval(function () {
        var cur_artBox = document.querySelectorAll(".w-detail-index");
        var cur_more = document.querySelector(".w-detail-display-btn");
        var cur_more2 = document.querySelector(".wgt-best-showbtn");
        var cur_more4 = document.querySelectorAll(".wgt-answers-showbtn");

        var cur_more3 = document.querySelector("#show-hide-container #show-answer-hide");
        var cur_more5 = document.querySelector("#show-hide-container");
       
        if (cur_artBox) {
            cur_artBox.forEach(element => {
                element.style.setProperty('max-height', '10000px', 'important');    
            });
            
        }
        if (cur_more) {
            cur_more.remove();
        }
        if(cur_more3 && cur_more5 && cur_more5.classList.contains("folding")==false){
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            cur_more3.dispatchEvent(e);
        }
        /*展开全文*/
        if (cur_more2) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            cur_more2.dispatchEvent(e);
        }
        if (cur_more4) {
            cur_more4.forEach(element => {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                element.dispatchEvent(e);
            })
        }
        
    }, 60);


}else{
    setInterval(function () {
        var cur_artBox = document.querySelectorAll(".w-detail-index");
        var cur_more = document.querySelector(".w-detail-display-btn");
        
        if (cur_artBox) {
            cur_artBox.forEach(element => {
                element.style.setProperty('max-height', '10000px', 'important');    
            });
        }
        if (cur_more) {
            cur_more.remove();
        }
        
    }, 100);
    setInterval(function(){
        var cur_more2 = document.querySelector(".show-more-replies");
        /*展开其他答案*/
        if (cur_more2) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("tap", true, true);
            cur_more2.dispatchEvent(e);
        }
    },2000)
}