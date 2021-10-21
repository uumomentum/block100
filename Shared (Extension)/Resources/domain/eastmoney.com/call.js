setInterval(function () {
    var ad_el_1 = document.querySelector(".dc-layer-tc");
    var ad_el_2 = document.querySelector(".dc-fb");
    var ad_el_3 = document.querySelector(".dc-result-tc");
    var ad_el_4 = document.querySelector("#topDTT");
    var ad_el_5 = document.querySelector("#openinapp");
    var ad_el_7 = document.querySelector("a.fold-btn");
    
    var ad_el_body = document.querySelector("body");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_body) ad_el_body.style.setProperty('padding-top', '0', 'important');
    if (ad_el_7) ad_el_7.remove();
 }, 60);