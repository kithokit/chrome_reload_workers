function onRequest(request, sender, sendResponse) {
 // Request from popup.js
 if (sender.tab.title.indexOf("popup") !=-1){
   localStorage["count"] = 0;
   localStorage["url"] = request.url;
   localStorage["searchText"] = request.searchText;
   localStorage["number"] = request.number;
   for (i=0;i<request.number; ++i){
      chrome.tabs.create({url: request.url}, function(tab){
      });
   };    
 }

 if (request.message == "contentscript_is_loaded"){
   chrome.tabs.sendMessage(sender.tab.id, {
     message:"start_search",
     url: localStorage["url"],
     searchText : localStorage["searchText"],
   });
 }

 if (request.message == "success_loaded"){
   chrome.browserAction.setBadgeText({text: "Hit!"});
 }

 if (request.message == "not_success_loaded"){
   localStorage["count"] = parseInt(localStorage["count"]) + 1 ;
   chrome.browserAction.setBadgeText({text: localStorage["count"]});
 }

 sendResponse({});
};

// update icon when ok
chrome.browserAction.setBadgeText({text: "N/A"});
// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
