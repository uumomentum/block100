setInterval(function () {
    var ad_el_1 = document.querySelector(".article-button");
    var ad_el_2 = document.querySelector(".layer-bottom");
    var ad_el_3 = document.querySelector(".layer-top");
   
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
 }, 60);