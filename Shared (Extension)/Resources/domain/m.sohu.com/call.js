setInterval(function () {
    var ad_el_1 = document.querySelector(".top-bill-wrapper");
    var ad_el_2 = document.querySelector(".middle-insert-ad");
    var ad_el_3 = document.querySelector("#middleText");
    var ad_el_4 = document.querySelector("#middleBanner");
    var ad_el_5 = document.querySelector(".feed-list-scoped>div");
    var ad_el_6 = document.querySelector("#bottomBanner");
 
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_6) ad_el_6.remove();
 }, 60);