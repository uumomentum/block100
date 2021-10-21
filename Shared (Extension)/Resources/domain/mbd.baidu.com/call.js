setInterval(function () {
    var ad_el_1 = document.querySelector(".uukjsi6a_zpZccrqYiI3k");
    var ad_el_2 = document.querySelector(".default-container");
    var ad_el_3 = document.querySelector(".layer-itemBtn.normal");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) {
        var e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true);
        ad_el_3.dispatchEvent(e);
    };
 }, 10);

