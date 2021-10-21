var browser = browser;
browser = browser ?? chrome;

const storage = {
    set rules(value) {
        browser.storage.local.set({ "rules": value });
    },
    get rules() {
        return browser.storage.local.get(["rules"]);
    },
    set rules_version(value) {
        browser.storage.local.set({ "rules_version": value });
    },
    get rules_version() {
        return browser.storage.local.get(["rules_version"]);
    },
}

function sendMessage(d) {
    browser.runtime.sendMessage({ cmd: d.cmd, param: d.param }).then((response) => {});
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd) {
        window[request.cmd](request?.param)
    }
});

function inject(param) {
    if ('frameId' in param) {
        sendMessage({ cmd: "injectByFrameID", param: param })
    } else {
        sendMessage({ cmd: "inject", param: param })
    }
}

function injectCSS(param) {
    if ('frameId' in param) {
        sendMessage({ cmd: "injectCSSByFrameID", param: param })
    } else {
        sendMessage({ cmd: "injectCSS", param: param })
    }
}

function enable_ruleset(b) {
    sendMessage({ cmd: "ruleset", param: b })
}


function reload(time = 1000) {
    setTimeout(function () {
        location.reload(true);
    }, time);
}

function toast(width, height, positiony, icon, text, duration) {
    let toast_tip = `<div id="toastbox_tipwrap">
            <p><img src="" /> <span></span></p>
        </div>
        <style>
            #toastbox_tipwrap {
                background: #eee;
                position: fixed;
                z-index: 2147483647;
                overflow: hidden;
                margin: 0 auto;
                line-height: 90px;
                text-align: center;
                border-radius: 6px;
                left: 50%;
                opacity: 0;
                transition: all .6s ease-in;
            }
            #toastbox_tipwrap.show{opacity:1}
            #toastbox_tipwrap p {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                height: 100%;
                margin:0;
            }
            #toastbox_tipwrap p img {
                height: 60%;margin-right:5px;width:auto;
            }
        </style>`;
    
    setTimeout(function(){document.querySelector("body").insertAdjacentHTML('beforeEnd', toast_tip);},500);
    var boxw = width;
    var boxh = height;
    var posY = positiony;
    var box = document.querySelector("#toastbox_tipwrap");
    var toast_icon = document.querySelector('#toastbox_tipwrap img');
    var toast_des = document.querySelector('#toastbox_tipwrap span');
    if (box) {
        if (toast_icon) { toast_icon.src = icon; }
        if (toast_des) { toast_des.innerHTML = text; }
        box.style.cssText = `width:${boxw}px;height:${boxh}px;top:${posY}%;margin-left:-${boxw / 2}px`;
        setTimeout(function () { box.classList.add("show"); }, 600);
        setTimeout(function () {
            box.classList.remove("show");
            setTimeout(function () { box.style.display = "none" }, 600);
        }, duration);
    }
}



async function init() {

    if (window == top || location.host.match("tieba.baidu.com") || location.host.match("bilibili.com")) {

        var rules = { "showMoreWhiteList": [{ "status": 1, "host": "baike.baidu.com", "imp_status": true, "desc": "百度百科" }, { "status": 1, "host": "jingyan.baidu.com", "imp_status": true, "desc": "百度经验" }, { "status": 1, "host": "zhidao.baidu.com", "imp_status": true, "desc": "百度知道" }, { "status": 1, "host": "tieba.baidu.com", "imp_status": true, "desc": "百度贴吧" }, { "status": 1, "host": "zhihu.com", "imp_status": true, "desc": "知乎" }, { "status": 1, "host": "163.com", "imp_status": true, "desc": "网易" }, { "status": 1, "host": "c.m.163.com", "imp_status": true, "desc": "网易" }, { "status": 1, "host": "news.sina.cn", "imp_status": true, "desc": "新浪" }, { "status": 1, "host": "sina.cn", "imp_status": true, "desc": "新浪" }, { "status": 1, "host": "xw.qq.com", "imp_status": true, "desc": "腾讯新闻" }, { "status": 1, "host": "inews.qq.com", "imp_status": true, "desc": "腾讯新闻" }, { "status": 1, "host": "i.ifeng.com", "imp_status": true, "desc": "凤凰网" }, { "status": 1, "host": "m.sohu.com", "imp_status": true, "desc": "搜狐新闻" }, { "status": 1, "host": "3g.china.com", "imp_status": true, "desc": "中华网" }, { "status": 1, "host": "m.thepaper.cn", "imp_status": true, "desc": "澎湃新闻" }, { "status": 1, "host": "xiaohongshu.com", "imp_status": true, "desc": "小红书" }, { "status": 1, "host": "baidu.com.iact", "imp_status": true, "desc": "百度新闻列表" }, { "status": 1, "host": "baijiahao.baidu.com", "imp_status": true, "desc": "百度百家号" }, { "status": 1, "host": "blog.csdn.net", "imp_status": true, "desc": "csdn博客" }, { "status": 1, "host": "news.m.yiche.com", "imp_status": true, "desc": "易车新闻" }, { "status": 1, "host": "36kr.com", "imp_status": true, "desc": "36氪" }, { "status": 1, "host": "yidianzixun.com", "imp_status": true, "desc": "一点资讯" }, { "status": 1, "host": "xueqiu.com", "imp_status": true, "desc": "雪球" }, { "status": 1, "host": "10jqka.com.cn", "imp_status": true, "desc": "同花顺" }, { "status": 1, "host": "jianshu.com", "imp_status": true, "desc": "简书" }, { "status": 1, "host": "mafengwo.cn", "imp_status": true, "desc": "马蜂窝" }, { "status": 1, "host": "qyer.com", "imp_status": true, "desc": "穷游论坛" }, { "status": 1, "host": "eastmoney.com", "imp_status": true, "desc": "东方财富" }, { "status": 1, "host": "bbs.tianya.cn", "imp_status": true, "desc": "天涯社区" }, { "status": 1, "host": "douban.com", "imp_status": true, "desc": "豆瓣话题" }, { "status": 1, "host": "guancha.cn", "imp_status": true, "desc": "观察者网" }, { "status": 1, "host": "huanqiu.com", "imp_status": true, "desc": "环球网" }, { "status": 1, "host": "infzm.com", "imp_status": true, "desc": "南方周末" }, { "status": 1, "host": "bjnews.com.cn", "imp_status": true, "desc": "新京报" }, { "status": 1, "host": "ppsport.com", "imp_status": true, "desc": "PP体育" }, { "status": 1, "host": "pconline.com.cn", "imp_status": true, "desc": "太平洋电脑网" }, { "status": 1, "host": "xcar.com.cn", "imp_status": true, "desc": "爱卡汽车" }, { "status": 1, "host": "mp.cnfol.com", "imp_status": true, "desc": "中金在线" }, { "status": 1, "host": "3g.cnfol.com", "imp_status": true, "desc": "中金在线" }, { "status": 1, "host": "yicai.com", "imp_status": true, "desc": "第一财经" }, { "status": 1, "host": "hexun.com", "imp_status": true, "desc": "和讯" }, { "status": 1, "host": "m.toutiao.com", "imp_status": true, "desc": "头条新闻" }], "showMoreStatus": true, "extensionStatus": "1", "jumpAppWhiteList": [{ "status": 1, "host": "bilibili", "imp_status": true, "desc": "哔哩哔哩" }, { "status": 1, "host": "baidu", "imp_status": true, "desc": "百度" }, { "status": 1, "host": "zhihu", "imp_status": true, "desc": "知乎" }, { "status": 1, "host": "tieba", "imp_status": true, "desc": "贴吧" }], "domains": { "domain_list": { "baidu.com.iact": "www.baidu.com/#iact", "tieba.baidu.com": "tieba.baidu.com", "36kr.com": "36kr.com/p/", "news.m.yiche.com": "news.m.yiche.com/", "bbs.tianya.cn": "bbs.tianya.cn/m/post-([\\s\\S]*)", "xcar.com.cn": "a.xcar.com.cn/info/", "bjnews.com.cn": "m.bjnews.com.cn/detail/", "zhidao.baidu.com": "zhidao.baidu.com/question", "c.m.163.com": "c.m.163.com/news/a/", "sina.cn": "([\\s\\S]*).sina.cn/", "3g.china.com": "3g.china.com/act/news/", "mbd.baidu.com": "mbd.baidu.com", "m.sohu.com": "m.sohu.com/a", "jianshu.com": "jianshu.com/", "3g.cnfol.com": "3g.cnfol.com", "xw.qq.com": "xw.qq.com/", "blog.csdn.net": "blog.csdn.net/([\\s\\S]*)/article/details/", "hexun.com": "m.hexun.com/news/", "qyer.com": "m.qyer.com/bbs/", "pconline.com.cn": "g.pconline.com.cn/x/", "huanqiu.com": "([\\s\\S]*).huanqiu.com/article/", "m.thepaper.cn": "m.thepaper.cn/newsDetail_([\\s\\S]*)", "eastmoney.com": "wap.eastmoney.com/a/", "guancha.cn": "m.guancha.cn/", "m.toutiao.com": "m.toutiao.com", "163.com": "3g.163.com/([\\s\\S]*)/article/", "inews.qq.com": "view.inews.qq.com/", "jingyan.baidu.com": "jingyan.baidu.com", "douban.com": "m.douban.com/group/topic/", "infzm.com": "infzm.com/wap/", "news.sina.cn": "news.sina.cn/", "mp.cnfol.com": "mp.cnfol.com/([\\s\\S]*)/article/", "xueqiu.com": "xueqiu.com/", "xiaohongshu.com": "www.xiaohongshu.com/discovery/item/", "10jqka.com.cn": "m.10jqka.com.cn/", "yidianzixun.com": "www.yidianzixun.com/article/", "baike.baidu.com": "baike.baidu.com", "ppsport.com": "m.ppsport.com/news/", "mafengwo.cn": "m.mafengwo.cn/i/", "zhihu.com": "zhihu.com", "baijiahao.baidu.com": "baijiahao.baidu.com/", "i.ifeng.com": "i.ifeng.com/", "yicai.com": "m.yicai.com/news/" } }, "jumpAppStatus": true, "adFreeWhiteList": [{ "status": 1, "host": "baike.baidu.com", "imp_status": true, "desc": "百度百科" }, { "status": 1, "host": "jingyan.baidu.com", "imp_status": true, "desc": "百度经验" }, { "status": 1, "host": "zhidao.baidu.com", "imp_status": true, "desc": "百度知道" }, { "status": 1, "host": "tieba.baidu.com", "imp_status": true, "desc": "百度贴吧" }, { "status": 1, "host": "zhihu.com", "imp_status": true, "desc": "知乎" }, { "status": 1, "host": "163.com", "imp_status": true, "desc": "网易" }, { "status": 1, "host": "c.m.163.com", "imp_status": true, "desc": "网易" }, { "status": 1, "host": "news.sina.cn", "imp_status": true, "desc": "新浪" }, { "status": 1, "host": "sina.cn", "imp_status": true, "desc": "新浪" }, { "status": 1, "host": "xw.qq.com", "imp_status": true, "desc": "腾讯新闻" }, { "status": 1, "host": "inews.qq.com", "imp_status": true, "desc": "腾讯新闻" }, { "status": 1, "host": "i.ifeng.com", "imp_status": true, "desc": "凤凰网" }, { "status": 1, "host": "m.sohu.com", "imp_status": true, "desc": "搜狐新闻" }, { "status": 1, "host": "3g.china.com", "imp_status": true, "desc": "中华网" }, { "status": 1, "host": "m.thepaper.cn", "imp_status": true, "desc": "澎湃新闻" }, { "status": 1, "host": "xiaohongshu.com", "imp_status": true, "desc": "小红书 " }, { "status": 1, "host": "baidu.com.iact", "imp_status": true, "desc": "百度新闻列表" }, { "status": 1, "host": "baijiahao.baidu.com", "imp_status": true, "desc": "百度百家号" }, { "status": 1, "host": "blog.csdn.net", "imp_status": true, "desc": "csdn博客" }, { "status": 1, "host": "news.m.yiche.com", "imp_status": true, "desc": "易车新闻" }, { "status": 1, "host": "36kr.com", "imp_status": true, "desc": "36氪" }, { "status": 1, "host": "yidianzixun.com", "imp_status": true, "desc": "一点资讯" }, { "status": 1, "host": "xueqiu.com", "imp_status": true, "desc": "雪球" }, { "status": 1, "host": "10jqka.com.cn", "imp_status": true, "desc": "同花顺" }, { "status": 1, "host": "jianshu.com", "imp_status": true, "desc": "简书" }, { "status": 1, "host": "mafengwo.cn", "imp_status": true, "desc": "马蜂窝" }, { "status": 1, "host": "qyer.com", "imp_status": true, "desc": "穷游论坛" }, { "status": 1, "host": "eastmoney.com", "imp_status": true, "desc": "东方财富" }, { "status": 1, "host": "bbs.tianya.cn", "imp_status": true, "desc": "天涯社区" }, { "status": 1, "host": "douban.com", "imp_status": true, "desc": "豆瓣话题" }, { "status": 1, "host": "guancha.cn", "imp_status": true, "desc": "观察者网" }, { "status": 1, "host": "huanqiu.com", "imp_status": true, "desc": "环球网" }, { "status": 1, "host": "infzm.com", "imp_status": true, "desc": "南方周末" }, { "status": 1, "host": "bjnews.com.cn", "imp_status": true, "desc": "新京报" }, { "status": 1, "host": "ppsport.com", "imp_status": true, "desc": "PP体育" }, { "status": 1, "host": "pconline.com.cn", "imp_status": true, "desc": "太平洋电脑网" }, { "status": 1, "host": "xcar.com.cn", "imp_status": true, "desc": "爱卡汽车" }, { "status": 1, "host": "mp.cnfol.com", "imp_status": true, "desc": "中金在线" }, { "status": 1, "host": "3g.cnfol.com", "imp_status": true, "desc": "中金在线" }, { "status": 1, "host": "yicai.com", "imp_status": true, "desc": "第一财经" }, { "status": 1, "host": "hexun.com", "imp_status": true, "desc": "和讯" }, { "status": 1, "host": "m.toutiao.com", "imp_status": true, "desc": "头条新闻" }], "adFreeStatus": true, "tips": 1 };
        
        var domainList = rules.domains.domain_list;
        if (rules == (void 0)) {
            sendMessage({ cmd: "init_rules" });
        }


        for (x in domainList) {
            if (new RegExp(domainList[x]).test(window.location.host + window.location.pathname)) {
                if ((!!+rules.extensionStatus) && rules.showMoreStatus && (rules.showMoreWhiteList.filter(item => { return (item.host == x && (item.status && item.imp_status) == false) }).length == 0)) {
                    inject({ type: "file", code: `domain/${x}/read.js` });
                    if (window == top) {
                        if (rules?.tips) {
                            toast(200, 40, 75, browser.runtime.getURL('images/icon-512@1x.png'), '已为您自动展开全文', 2600);
                        }
                    }
                }
                if ((!!+rules.extensionStatus) && rules.adFreeStatus && (rules.adFreeWhiteList.filter(item => { return (item.host == x && (item.status && item.imp_status) == false) }).length == 0)) {
                    inject({ type: "file", code: `domain/${x}/call.js` });
                }
            }
        }



        for (let i = 0; i < rules.jumpAppWhiteList.length; i++) {
            let host = rules.jumpAppWhiteList[i].host;
            let status = rules.jumpAppWhiteList[i].status;
            let imp_status = rules.jumpAppWhiteList[i].imp_status;
            if (host == "baidu") {
                if (!rules.jumpAppStatus) {
                    enable_ruleset(false);
                } else {
                    enable_ruleset((!!+rules.extensionStatus) && status && imp_status);
                    if ((!!+rules.extensionStatus) && status && imp_status) {
                        if (/baidu.com/.test(location.host)) {
                            inject({ type: "file", code: `jumpapp/${host}/content.baidu.js`, runAt: "document_start" });
                        }
                        if (/sm\.cn/.test(location.host)) {
                            inject({ type: "file", code: `jumpapp/${host}/content.sm.js`, runAt: "document_start" });
                        }
                        if (/so\.toutiao\.com/.test(location.host)) {
                            inject({ type: "file", code: `jumpapp/${host}/content.tt.js`, runAt: "document_start" });
                        }
                    }
                }
            }
            if (host == "bilibili" && (!!+rules.extensionStatus) && rules.jumpAppStatus && status && imp_status) {
                if ((/[?|&]word=/.test(location.search)||/[?|&]wd=/.test(location.search)) && /\/s$/.test(location.pathname) && (location.host=="m.baidu.com"||location.host=="www.baidu.com")) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.baidu.js` });
                }
                if (/[?|&]q=/.test(location.search) && /\/s$/.test(location.pathname) && /sm\.cn/.test(location.host)) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.sm.js` });
                }
                if (/[?|&]keyword=/.test(location.search) && /\/search$/.test(location.pathname) && /so\.toutiao\.com/.test(location.host)) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.tt.js` });
                }
            }
            if (host == "zhihu" && (!!+rules.extensionStatus) && rules.jumpAppStatus && status && imp_status) {
                if ((/[?|&]word=/.test(location.search)||/[?|&]wd=/.test(location.search)) && /\/s$/.test(location.pathname) && (location.host=="m.baidu.com"||location.host=="www.baidu.com")) {
                    inject({ type: "file", code: `jumpapp/${host}/content.baidu.js` });
                }
                if (/[?|&]q=/.test(location.search) && /\/s$/.test(location.pathname) && /sm\.cn/.test(location.host)) {
                    inject({ type: "file", code: `jumpapp/${host}/content.sm.js` });
                }
                if (/[?|&]keyword=/.test(location.search) && /\/search$/.test(location.pathname) && /so\.toutiao\.com/.test(location.host)) {
                    inject({ type: "file", code: `jumpapp/${host}/content.tt.js` });
                }
                if (/xxx\/xxx/.test(location.href)) {
                    injectCSS({ type: "code", code: `* {opacity: 0;}`, runAt: "document_start" });
                    inject({ type: "file", code: `jumpapp/${host}/nojump.baidu.js`, runAt: "document_start" });
                }
            }
            if (host == "tieba" && (!!+rules.extensionStatus) && rules.jumpAppStatus && status && imp_status) {
                if ((/[?|&]word=/.test(location.search)||/[?|&]wd=/.test(location.search)) && /\/s$/.test(location.pathname) && (location.host=="m.baidu.com"||location.host=="www.baidu.com")) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.baidu.js` });
                }
                if (/[?|&]q=/.test(location.search) && /\/s$/.test(location.pathname) && /sm\.cn/.test(location.host)) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.sm.js` });
                }
                if (/[?|&]keyword=/.test(location.search) && /\/search$/.test(location.pathname) && /so\.toutiao\.com/.test(location.host)) {
                    inject({ type: "code", code: "window.ybdextpathframe = '" + browser.runtime.getURL('iframe.html') + "';" })
                    inject({ type: "file", code: `jumpapp/${host}/content.tt.js` });
                }
            }
        }


        if ((/[?|&]word=/.test(location.search)||/[?|&]wd=/.test(location.search)) && /\/s$/.test(location.pathname) && (location.host=="m.baidu.com"||location.host=="www.baidu.com")) {
            inject({ type: "file", code: `jumpapp/tc.baidu.js` });
        }
        
        if (/[?|&]q=/.test(location.search) && /\/s$/.test(location.pathname) && /sm\.cn/.test(location.host)) {
            inject({ type: "file", code: `jumpapp/tc.sm.js` });
        }
        
        if (/[?|&]keyword=/.test(location.search) && /\/search$/.test(location.pathname) && /so\.toutiao\.com/.test(location.host)) {
            inject({ type: "file", code: `jumpapp/tc.tt.js` });
        }


    }
}

init();
