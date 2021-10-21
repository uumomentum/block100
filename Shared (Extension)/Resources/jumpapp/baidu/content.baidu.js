setInterval(function(){
    var call = document.querySelector(".baiduappcall-wrap");
    if(call) call.remove();
    var popupLead = document.querySelector("#popupLead");
    if(popupLead) popupLead.remove();
    var call2 = document.querySelector(".callicon-wrap");
    if(call2) call2.remove();
    var banner  = document.querySelector(".banner");
    if(banner) banner.remove();
    localStorage.setItem("safariOneInvoke",JSON.stringify({"_value":3}));
    localStorage.setItem("wise_feed_xsource_baidu",new Date().getTime());
    var tomas = document.querySelector("#tomas");
    if(!tomas){
        var s =  document.createElement("script");s.id="tomas";s.textContent=`Object.defineProperty(navigator, 'userAgent', {value: '${navigator.userAgent}  oppobrowser',writable: false});`;document.head.append(s);
    }
    var cr =  document.getElementById("copyright");
    if(cr?.nextElementSibling && cr?.nextElementSibling.style.position=="fixed"){
        cr?.nextElementSibling.style.setProperty('left', '-9999px', 'important');
    }
    
    var resultspre = document.getElementById("results-pre");
    if(resultspre){
        resultspre.style.position = "sticky";
    }
},500)



