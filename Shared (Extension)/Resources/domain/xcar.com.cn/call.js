setInterval(function () {
    var ad_el_1 = document.querySelector(".head_tm_content");
    var ad_el_2 = document.querySelector(".download_carousel_content");
    var ad_el_3 = document.querySelector(".opened-app");
    var ad_el_4 = document.querySelector(".inquiryModelContent_new");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
 }, 60);