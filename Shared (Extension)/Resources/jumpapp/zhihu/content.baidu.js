







if(location.host=="m.baidu.com"){
    setInterval(function(){
        document.querySelectorAll("article").forEach(item=>{
            if(item.parentNode.parentNode.getAttribute("data-log")){
                let url = JSON.parse(item.parentNode.parentNode.getAttribute("data-log"))["mu"];
                var _a = document.createElement("a");_a.href = url;
                if(/zhihu.com/.test(url) && !(/xxx\/xxx/.test(item.getAttribute("rl-link-href")))){
                    let rep_url = "https://"+_a.host+"/xxx/xxx?url="+encodeURIComponent(url);
                    item.setAttribute("rl-link-href",rep_url);
                }
                document.querySelectorAll("a,div[rl-link-href]",item).forEach(a=>{
                    var ourl =a.tagName=="A"?a.href:a.getAttribute("rl-link-href");
                    var _oa = document.createElement("a");_oa.href = ourl;
                    if(/zhihu.com/.test(ourl) && !(/xxx\/xxx/.test(ourl))){
                        let rep_url = "https://"+_oa.host+"/xxx/xxx?url="+encodeURIComponent(ourl);
                        a.setAttribute(a.tagName=="A"?"href":"rl-link-href",rep_url);
                    }
                })
            }
        })
    },500)
        
}

if(location.host=="www.baidu.com"){
        
        setInterval(function(){
            document.querySelectorAll(".result,result-op").forEach(item=>{
                document.querySelectorAll("a",item).forEach(a=>{
                    if(a.tagName=="A"){
                        if(/zhihu.com/.test(a.href) && !(/xxx\/xxx/.test(a.href))){
                            a.href = "https://"+a.host+"/xxx/xxx?url="+encodeURIComponent(a.href);
                        }
                    }
                })
            })
        },500)

}

