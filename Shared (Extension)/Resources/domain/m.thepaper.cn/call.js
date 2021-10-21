setInterval(function () {
    var ad_el_1 = document.querySelector("#moblink_moreread");
    var ad_el_2 = document.querySelector(".hotCommentsMoblink_white");
    var ad_el_3 = document.querySelector("#moblink_hotRecommend");
    var ad_el_4 = document.querySelector("#bottomBanner");
 
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
 }, 60);