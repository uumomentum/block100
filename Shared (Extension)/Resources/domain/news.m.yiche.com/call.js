setInterval(function () {
    var ad_el_1 = document.querySelector(".news-ad");
    var ad_el_2 = document.querySelector(".news-openApp");
    var ad_el_3 = document.querySelector(".news-adbot");
    var ad_el_4 = document.querySelector(".guess-ad");
    var ad_el_5 = document.querySelector("#app_download_ycapp");
    var ad_el_6 = document.querySelector(".float-r-box");
    var ad_el_7 = document.querySelector("#app_download_price");

    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_6) ad_el_6.remove();
    if (ad_el_7) ad_el_7.remove();
 }, 60);