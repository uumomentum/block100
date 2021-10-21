if(/iPhone/.test(navigator.userAgent) && location.host=="www.baidu.com"){
    location.replace(location.href.replace("//www.","//m."));
}

if(!/iPhone/.test(navigator.userAgent) && location.host=="m.baidu.com"){
    location.replace(location.href.replace("//m.","//www."));
}
if(location.host=="m.baidu.com"){
    setInterval(function(){
        document.querySelectorAll("article").forEach(item=>{
            document.querySelectorAll("a,div[rl-link-href]",item).forEach(a=>{
                if(a.tagName=="A"){
                    if(/baidu.com\/.*\/tc\?/.test(a.href)){
                        a.setAttribute("_href",a.href);
                        a.setAttribute("href","javascript:;");
                        sendMessage({cmd:"prefetch",param:{url:a.getAttribute("_href")}},function(text){
                            a.setAttribute("href",text);
                        });
                    }
                }else{
                    if(/baidu.com\/.*\/tc\?/.test(a.getAttribute("rl-link-href")) && a.getAttribute("_href")==null){
                        a.setAttribute("_href",a.getAttribute("rl-link-href"));
                        sendMessage({cmd:"prefetch",param:{url:a.getAttribute("_href")}},function(text){
                            a.setAttribute("rl-link-href",text);
                        });
                    }
                }
            })
        })
    },500)
}
if(location.host=="www.baidu.com"){
    setInterval(function(){
        document.querySelectorAll(".result,result-op").forEach(item=>{
            document.querySelectorAll("a",item).forEach(a=>{
                if(a.tagName=="A"){
                    if(/www.baidu.com\/link\?url=/.test(a.href)){
                        a.setAttribute("_href",a.href);
                        a.setAttribute("href","javascript:;");
                        sendMessage({cmd:"preajax",param:{url:a.getAttribute("_href").replace("http://","https://")}},function(text){
                            if(text){
                                a.href = text;
                            }
                        });
                    }
                }
            })
        })
    },500)
}
