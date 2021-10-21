setInterval(function () {
    var ad_el_1 = document.querySelector(".sw_c0");
    var ad_el_2 = document.querySelector(".page_main");
    var ad_el_3 = document.querySelector("#artFoldBox");
    var ad_el_4 = document.querySelector(".callApp_fl_btn");
    var ad_el_5 = document.querySelector("#midThreeAds");
    var ad_el_6 = document.querySelector(".s_card_white_m");
    var ad_el_7 = document.querySelector(".j_video_with_ad");
 
 
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.style.setProperty('padding-top', '0', 'important');
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_6) ad_el_6.remove();
    if (ad_el_7) ad_el_7.remove();
 }, 60);