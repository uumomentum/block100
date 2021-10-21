
setInterval(function () {
    var ad_el_1 = document.querySelector("#wgt-ad-guess");
    var ad_el_2 = document.querySelector(".rel-exp-feed-ad-item");
    var ad_el_3 = document.querySelector(".wgt-ad-exp-pic");
    var ad_el_4 = document.querySelector(".ad-recommend-box");
    var ad_el_5 = document.querySelector("#exp-content-list");
    var ad_el_6 = document.querySelector(".body aside");
    var ad_el_7 = document.querySelector(".baobao-image-item");
    
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_6) ad_el_6.remove();
    if (ad_el_7) ad_el_7.remove();
 },60);