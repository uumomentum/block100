setInterval(function () {
    var ad_el_body=document.querySelector("body");
    var ad_el_1 = document.querySelector(".tb-backflow");
    var ad_el_2 = document.querySelector(".nav-bar-wrapper");
    var ad_el_3 = document.querySelector(".fengchao-banner");
    var ad_el_4 = document.querySelector(".banner-wrapper");
    var ad_el_5 = document.querySelector(".fixed-nav-bar");
    var ad_el_6 = document.querySelector(".ertiao-wrap");
    var ad_el_7 = document.querySelector(".tb-banner-wrapper");
    var ad_el_8 = document.querySelector(".tb-share__btn--");
    var ad_el_9 = document.querySelector(".fixed-nav-bar-defensive");
    var ad_el_10 = document.querySelector("nav");
    var ad_el_11 = document.querySelector(".fengchao-banner-defensive");
    var ad_el_12 = document.querySelector(".banner-wrapper-defensive");
    
    
    if (ad_el_1) ad_el_1.remove();
    if(ad_el_body){
      ad_el_body.classList.remove("tb-modal-open");
    }
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_6) ad_el_6.remove();
    if (ad_el_7) ad_el_7.remove();
    if (ad_el_9) ad_el_9.remove();
    if (ad_el_10) ad_el_10.remove();
    if (ad_el_11) ad_el_11.remove();
    if (ad_el_12) ad_el_12.remove();
    if(ad_el_8) {
      var e = document.createEvent("MouseEvents");
      e.initEvent("tap", true, true);
      ad_el_8.dispatchEvent(e);
    }
 },60);