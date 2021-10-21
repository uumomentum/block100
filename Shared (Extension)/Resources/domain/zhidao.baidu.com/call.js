//百度知道
var sw = document.documentElement.clientWidth;
var sh = document.documentElement.clientHeight;
if (sw >= 768 && sh >= 768 && navigator.userAgent.indexOf("iPhone") == -1) {//pad
    setInterval(function () {
        var ad_el_1 = document.querySelector("#wgt-nigrf60fea7-asp");
        var ad_el_2 = document.querySelector("#wgt-gowxr60fea7-youx");
        var ad_el_3 = document.querySelector(".feed-ecom-ads");
        var ad_el_4 = document.querySelector(".wgt-asp-youx");
        var ad_el_5 = document.querySelector(".mm-content-box iframe");
        var ad_el_7 = document.querySelector('.ec-ad');
        var ad_el_8 = document.querySelector('#qbleftdown-container');
        var ad_el_9 = document.querySelector('.qbrightdown-ecom-ads');
        var ad_el_10 = document.querySelector('.wgt-answers .wgt-ads');
        if (ad_el_1) ad_el_1.remove();
        if (ad_el_2) ad_el_2.remove();
        if (ad_el_3) ad_el_3.remove();
        if (ad_el_4) ad_el_4.remove();
        if (ad_el_5) ad_el_5.remove();
        if (ad_el_7) ad_el_7.remove();
        if (ad_el_8) ad_el_8.remove();
        if (ad_el_9) ad_el_9.remove();
    }, 60);

} else {
    setInterval(function () {
        var ad_el_1 = document.querySelector("#wgt-nigrf60fea7-asp");
        var ad_el_2 = document.querySelector("#wgt-gowxr60fea7-youx");
        var ad_el_3 = document.querySelector(".feed-ecom-ads");
        var ad_el_4 = document.querySelector(".wgt-asp-youx");
        var ad_el_5 = document.querySelector(".mm-content-box iframe");
        var ad_el_6 = document.querySelector('div[id^="wgt-"]');
        var ad_el_7 = document.querySelector('.ec-ad');

        if (ad_el_1) ad_el_1.remove();
        if (ad_el_2) ad_el_2.remove();
        if (ad_el_3) ad_el_3.remove();
        if (ad_el_4) ad_el_4.remove();
        if (ad_el_5) ad_el_5.remove();
        if (ad_el_6) ad_el_6.remove();
        if (ad_el_7) ad_el_7.remove();
    }, 60);
}