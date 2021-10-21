setInterval(function(){
    document.querySelectorAll("a").forEach(a=>{
        if(/zhihu.com/.test(a.host) && !(/xxx\/xxx/.test(a.pathname))){
            let rep_url = "https://"+a.host+"/xxx/xxx?url="+encodeURIComponent(a.href);
            a.href = rep_url;
        }
    })
},500)
