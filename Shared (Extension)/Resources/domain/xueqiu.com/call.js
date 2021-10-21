setInterval(function () {
    var ad_el_1 = document.querySelector("#swiper");
    var ad_el_2 = document.querySelector("#openapp__fix");
    var ad_el_3 = document.querySelector(".FloatDownloadButton_mobile_openapp__fix_1eD.FloatDownloadButton_mobile_new_1Tx");
    var ad_el_4 = document.querySelector(".AppBanner_mobile_app-banner_3XM");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3){
        ad_el_3.style.setProperty('left', '-9999px', 'important');
    }
    if (ad_el_4) ad_el_4.remove();
 }, 60);