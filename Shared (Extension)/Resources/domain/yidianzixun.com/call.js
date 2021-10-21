setInterval(function () {
    var ad_el_1 = document.querySelector(".banner");
    var ad_el_2 = document.querySelector(".news-item-gg");
    var ad_el_3 = document.querySelector("iframe");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
 }, 60);