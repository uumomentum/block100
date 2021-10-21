setInterval(function () {
    var ad_el_1 = document.querySelector("#TalionNav");
    var ad_el_2 = document.querySelector("iframe");
    var ad_el_3 = document.querySelector(".card>div");
    var ad_el_4 = document.querySelectorAll(".card div");
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) ad_el_3.remove();
    ad_el_4.forEach(function(item,index){
       if(item.innerText=="广告") item.remove()
    })
 }, 60);