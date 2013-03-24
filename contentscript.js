chrome.extension.onMessage.addListener(onMessage);


function onMessage(request, sender, sendResponse) {
  alert("contentscript!")
}

var regex = /Server Busy/
// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  //var choose = document.getElementById('toMainButton');
  //setTimeout(function(){ choose.click(); } , 1500 ) ;
  //chrome.browserAction.setBadgeText({text: "no"});
  chrome.extension.sendRequest({result:"find"}, function(response) {});
} else {
  chrome.extension.sendRequest({result:"notfind"}, function(response) {});
  
}

