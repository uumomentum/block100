setInterval(function () {
    var ad_el_1 = document.querySelector(".header-wrap");
    var ad_el_2 = document.querySelector(".call-app-btn");
    var ad_el_3 = document.querySelector("iframe");
    var ad_el_4 = document.querySelector(".wrapper-_PVsE_0");
    var ad_el_5 = document.querySelectorAll(".guidance-content .wrap-item-btn")[1];
    var ad_el_6 = document.querySelector(".index_call-app-btn");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        ad_el_5.dispatchEvent(e);
    }
    if(ad_el_6){
        ad_el_6.style.setProperty('left', '-9999px', 'important');
    }
 }, 50);