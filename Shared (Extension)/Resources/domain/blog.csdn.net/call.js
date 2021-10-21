setInterval(function () {
    var ad_el_1 = document.querySelector(".wap-shadowbox");
    var ad_el_2 = document.querySelector(".feed-Sign-span");
    var ad_el_3 = document.querySelector(".btn_open_app_prompt_div");
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_1) ad_el_1.remove();
 }, 60);