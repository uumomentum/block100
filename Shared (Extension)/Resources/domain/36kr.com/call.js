setInterval(function () {
    var ad_el_1 = document.querySelector(".article-top-swiper-goapp");
    var ad_el_2 = document.querySelector(".open-app-fixed");
    var ad_el_3 = document.querySelector(".tips-content .tips-list .tips-item:nth-child(2) .btn");
    var ad_el_4 = document.querySelector(".float-app-button-wrp");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        ad_el_3.dispatchEvent(e);
    }
    if (ad_el_4) ad_el_4.remove();
 }, 50);