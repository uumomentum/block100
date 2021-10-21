setInterval(function(){
    document.querySelectorAll("a").forEach(a=>{
        if(/bilibili.com/.test(a.host) && !(/safari-web-extension/.test(a.href))){
            let rep_url = window.ybdextpathframe+"?url="+encodeURIComponent(a.href);
            a.href = rep_url;
        }
    })
},500)
