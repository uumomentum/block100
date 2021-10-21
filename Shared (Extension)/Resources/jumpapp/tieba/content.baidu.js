if(location.host=="m.baidu.com"){
    setInterval(function(){
        document.querySelectorAll("article").forEach(item=>{
            if(item.parentNode.parentNode.getAttribute("data-log")){
                let url = JSON.parse(item.parentNode.parentNode.getAttribute("data-log"))["mu"];
                var _a = document.createElement("a");_a.href = url;
                if(/tieba.baidu.com/.test(url) && !(/safari-web-extension/.test(item.getAttribute("rl-link-href")))){
                    let rep_url = window.ybdextpathframe+"?url="+encodeURIComponent(url);
                    item.setAttribute("rl-link-href",rep_url);
                }
                document.querySelectorAll("a,div[rl-link-href]",item).forEach(a=>{
                    var ourl =a.tagName=="A"?a.href:a.getAttribute("rl-link-href");
                    if(/tieba.baidu.com/.test(ourl) && !(/safari-web-extension/.test(ourl))){
                        let rep_url = window.ybdextpathframe+"?url="+encodeURIComponent(ourl);
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
                        if(/tieba.baidu.com/.test(a.href) && !(/safari-web-extension/.test(a.href))){
                            a.href =  window.ybdextpathframe+"?url="+encodeURIComponent(a.href);
                        }
                    }
                })
            })
        },500)

}

