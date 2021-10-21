//百度百科
setInterval(function () {

    if(document.readyState == "complete"){



        var cur_more = document.querySelector(".yx-load-more-inner");
        var cur_more2= document.querySelector("#ui_refresh_down");
        var cur_more_a= document.querySelector(".baike-app-view .basicInfo .info-unfold .layout-icons_down-arrow");//剧集
        var cur_more_aa= document.querySelector(".baike-app-view .summary-more .layout-icons_down-arrow");//剧集
        
        var cur_more_b= document.querySelectorAll(".baike-app-view .section .series-section-colpase .layout-icons_down-arrow");//剧集 //多
        var cur_more_c= document.querySelector(".baike-app-view .BK-content-wrapper .table-container .table-show-all .layout-icons_down-arrow");//剧集
        var cur_more_d= document.querySelectorAll(".baike-app-view .section .subpage-series-section-colpase .layout-subpage-icons_down-arrow");//新页剧集 //多
        
        
        if (cur_more) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("tap", true, true);
            cur_more.dispatchEvent(e);
        }
        if(cur_more2){
            cur_more2.remove();
        }

        if (cur_more_a) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("tap", true, true);
            cur_more_a.dispatchEvent(e);
            cur_more_a.style.setProperty('margin-left', '-9999px', 'important');
        }
        if (cur_more_aa) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("tap", true, true);
            cur_more_aa.dispatchEvent(e);
            cur_more_aa.style.setProperty('margin-left', '-9999px', 'important');
        }
        if (cur_more_b) {
            cur_more_b.forEach(element => {
                var e = document.createEvent("MouseEvents");
                e.initEvent("tap", true, true);
                element.dispatchEvent(e);
                element.style.setProperty('margin-left', '-9999px', 'important');
            });
        }
        if (cur_more_c) {
            var e = document.createEvent("MouseEvents");
            e.initEvent("click", true, true);
            cur_more_c.dispatchEvent(e);
            cur_more_c.style.setProperty('margin-left', '-9999px', 'important');
        }
        if (cur_more_d) {
            cur_more_d.forEach(element => {
                var e = document.createEvent("MouseEvents");
                e.initEvent("click", true, true);
                element.dispatchEvent(e);
                element.style.setProperty('margin-left', '-9999px', 'important');
            });
        }

    }



}, 30);
