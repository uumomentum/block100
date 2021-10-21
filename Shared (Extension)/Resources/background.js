var browser = browser;
browser = browser ?? chrome;

var oldFetchfn = fetch;
window.fetch = function(input, opts){
    return new Promise(function(resolve, reject){
        var timeoutId = setTimeout(function(){
            reject(new Error("fetch timeout"))
        }, opts?.timeout||2000);
        oldFetchfn(input, opts||{}).then(
            res=>{
                clearTimeout(timeoutId);
                resolve(res)
            },
            err=>{
                clearTimeout(timeoutId);
                reject(err)
            }
        )
    })
}

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

function ruleset(b) {
    if (b) {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: [],
            enableRulesetIds: ['ruleset_1']
        })
    } else {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: ['ruleset_1'],
            enableRulesetIds: []
        })
    }
}

async function init_rules() {
    var { rules } = await storage.rules;
    if (rules) {
        if (Object.keys(rules).length) {
            
        } else {
            sync_rules();
        }
    } else {
        sync_rules();
    }
}

function sync_rules() {
    browser.runtime.sendNativeMessage({ cmd: "get_rules" }, function (res) {
        storage.rules = res.data;
    });
}

async function getRules() {
    var { rules } = await storage.rules;
    return rules;
}

function close(){
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        browser.tabs.remove(tabs[0].id);
    })
}

function inject(param) {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {

            if (param.type == "code") {
                browser.tabs.executeScript(tabs[0].id, { code: param.code, allFrames: true, runAt: param.runAt ?? "document_idle" })
            } else if (param.type == "file") {
                browser.tabs.executeScript(tabs[0].id, { file: param.code, allFrames: true, runAt: param.runAt ?? "document_idle" })
            } else {
                browser.tabs.executeScript(tabs[0].id, { file: param, allFrames: true, runAt: param.runAt ?? "document_idle" })
            }

    })
}

function injectCSSByFrameID(param) {
    browser.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        let frames = await browser.webNavigation.getAllFrames({ tabId: tabs[0].id });
        frames.forEach(item => {
            if (param.type == "code" && new RegExp(param.frameId).test(item.url)) {
                browser.tabs.insertCSS(tabs[0].id, { code: param.code, frameId: item.frameId, runAt: param.runAt ?? "document_idle" })
            } else if (param.type == "file" && new RegExp(param.frameId).test(item.url)) {
                browser.tabs.insertCSS(tabs[0].id, { file: param.code, frameId: item.frameId, runAt: param.runAt ?? "document_idle" })
            }
        })
    });
}

function injectByFrameID(param) {
    browser.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
        let frames = await browser.webNavigation.getAllFrames({ tabId: tabs[0].id });
        frames.forEach(item => {
            if (param.type == "code" && new RegExp(param.frameId).test(item.url)) {
                browser.tabs.executeScript(tabs[0].id, { code: param.code, frameId: item.frameId, runAt: param.runAt ?? "document_idle" })
            } else if (param.type == "file" && new RegExp(param.frameId).test(item.url)) {
                browser.tabs.executeScript(tabs[0].id, { file: param.code, frameId: item.frameId, runAt: param.runAt ?? "document_idle" })
            }
        })
    });
}

function injectCSS(param) {
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (param.type == "code") {
            browser.tabs.insertCSS(tabs[0].id, { code: param.code, allFrames: true, runAt: param.runAt ?? "document_idle" })
        } else if (param.type == "file") {
            browser.tabs.insertCSS(tabs[0].id, { file: param.code, allFrames: true, runAt: param.runAt ?? "document_idle" })
        } else {
            browser.tabs.insertCSS(tabs[0].id, { file: param, allFrames: true, runAt: param.runAt ?? "document_idle" })
        }
    })
}



browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd) {
        window[request.cmd](request?.param, sendResponse)
    }
    return true;
});

function sendMessageToContentScript(message, callback) {
    browser.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        browser.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) { callback(response); }
        });
    });
}

function sendMessageToAllContentScript(message, callback) {
    browser.tabs.query({}, function (tabs) {
        tabs.forEach(tab => {
            browser.tabs.sendMessage(tab.id, message, function (response) {
                if (callback) { callback(response); }
            });
        });
    });
}

init_rules();