 setInterval(function () {
    var ad_el_1 = document.querySelector("#J-attach-bottom-image");
    var ad_el_2 = document.querySelector("#J-attach-bottom-text");
    var ad_el_3 = document.querySelector("#qtqy_container");
    var ad_el_4 = document.querySelector(".BK-content-load");
    var ad_el_5 = document.querySelector(".hogsJzc12");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) {
        ad_el_4.style.setProperty('position', 'absolute', 'important');
        ad_el_4.style.setProperty('left', '-9999px', 'important');
    }
    if (ad_el_5) {
        ad_el_5.style.setProperty('height', '0', 'important');
    }
 }, 30);