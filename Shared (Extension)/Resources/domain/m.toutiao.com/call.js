setInterval(function () {
    var ad_el_1 = document.querySelector(".top-banner-container");
    var ad_el_2 = document.querySelector(".video-header-banner");
    var ad_el_3 = document.querySelector(".sdk-top-banner div");
    if (ad_el_1) ad_el_1.style.setProperty('height', '0', 'important');
    if (ad_el_1) ad_el_1.style.setProperty('overflow', 'hidden', 'important');
    if (ad_el_2) ad_el_2.style.setProperty('height', '0', 'important');
    if (ad_el_3) ad_el_3.style.setProperty('height', '0', 'important'); 
 }, 60);