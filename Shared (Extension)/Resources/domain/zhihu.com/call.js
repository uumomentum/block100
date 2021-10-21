setInterval(function () {
    var ad_el_1 = document.querySelector(".ModalWrap");
    var ad_el_2 = document.querySelector(".OpenInApp");
    var ad_el_3 = document.querySelector(".MHotFeedAd");
    var ad_el_4 = document.querySelector(".AdBelowMoreAnswers");
    var ad_el_body = document.querySelector("body");
    var ad_el_6 = document.querySelector(".WeiboAd-wrap");
    var ad_el_7 = document.querySelector(".MRelateFeedAd");
    var ad_el_8 = document.querySelector(".MBannerAd");
    var ad_el_9 = document.querySelector(".Baidu-header");
    var ad_el_10 = document.querySelector(".Baidu-ad");
    var ad_el_11 = document.querySelector(".OpenInAppButton");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2){
        ad_el_2.style.setProperty('left', '-9999px', 'important');
    }
    if (ad_el_3) ad_el_3.remove();
    if (ad_el_4) ad_el_4.remove();
    if (ad_el_body) {
        ad_el_body.classList.remove("ModalWrap-body");
        ad_el_body.style.overflow="auto";
    };
    if (ad_el_6) ad_el_6.remove();
    if (ad_el_7) ad_el_7.remove();
    if (ad_el_8) ad_el_8.remove();
    if (ad_el_9) ad_el_9.remove();
    if (ad_el_10) ad_el_10.remove();
    if (ad_el_11) {
        ad_el_11.style.setProperty('left', '-9999px', 'important');
    }
 },30);