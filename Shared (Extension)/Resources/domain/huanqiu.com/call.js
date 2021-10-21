setInterval(function () {
    var ad_el_1 = document.querySelector(".mod-block-x");
    var ad_el_2 = document.querySelectorAll("li");
    var ad_el_3 = document.querySelector("div[id^=ad_survey_ad_slot_]");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_3) ad_el_3.remove();
    ad_el_2.forEach(function(item,index){
       if(item.getElementsByTagName("a").length>1){item.remove()}
       
    })
 }, 60);