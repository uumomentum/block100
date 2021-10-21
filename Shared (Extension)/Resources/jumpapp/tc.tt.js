setInterval(function(){
    document.querySelectorAll("a").forEach(a=>{
        if(/so\.toutiao\.com\/search\/jump/.test(a.href)){
            a.href = decodeURIComponent(new URL(a.href).searchParams.get("url"))
        }
    })
},500)
