chrome.action.onClicked.addListener((_tab: chrome.tabs.Tab)=>{
    chrome.tabs.create({url: "index.html"});
});