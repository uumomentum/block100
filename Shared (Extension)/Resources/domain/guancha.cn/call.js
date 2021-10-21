setInterval(function () {
    var ad_el_1 = document.querySelector(".downloadBtn-box");
    var ad_el_2 = document.querySelector("#downloadBtn-position");
    var ad_el_3 = document.querySelector(".textPageCont-footer");
    var ad_el_4 = document.querySelector(".g_swiper_container");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
 }, 60);