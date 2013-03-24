function onRequest(request, sender, sendResponse) {
 // Request from popup.js
 if (sender.tab.title.indexOf("popup") !=-1){
   for (i=0;i<request.number; ++i){
      chrome.tabs.create({url: "http://" + request.url}, function(tab){
          chrome.tabs.sendMessage(tab.id, {searchtext:request.searchtext}, function(){});
      });
   };    
 }else {
   if (request.result == "find"){
      chrome.browserAction.setBadgeText({text: "N/A"});
      setTimeout(function(){
        chrome.tabs.update(sender.tab.id, {url: "http://www.urbtix.hk"});
      },2000);

   } else {
      chrome.browserAction.setBadgeText({text: "OK!"});
   }
 }
  sendResponse({});
};

// update icon when ok
chrome.browserAction.setBadgeText({text: "N/A"});
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
