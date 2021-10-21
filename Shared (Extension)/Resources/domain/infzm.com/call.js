setInterval(function () {
    var ad_el_1 = document.querySelector(".infzm-layout__footer");
    var ad_el_2 = document.querySelector(".infzm-playment-prompt h4");
    var ad_el_3 = document.querySelector(".infzm-playment-prompt a");
    var ad_el_4 = document.querySelector(".van-modal");
    var ad_el_5 = document.querySelector(".van-popup");
    var ad_el_6 = document.querySelector(".infzm-playment-prompt");
    var ad_el_body=document.querySelector("body");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_5) ad_el_5.remove();
    if (ad_el_6) ad_el_6.remove();
    if(ad_el_body){
        ad_el_body.classList.remove("van-overflow-hidden");
    }
 }, 60);