// Called when a message is passed.  We assume that the content script
// wants to show the page action.
function onRequest(request, sender, sendResponse) {
  // Show the page action for the tab that the sender (content script)
  // was on.
  var t=setTimeout(function(){
    chrome.tabs.update(sender.tab.id, {url: "http://www.urbtix.hk"});
    chrome.tabs.create({url: "http://www.urbtix.hk"});
  },2000);
  //var code = 'window.location.reload();';
  //chrome.tabs.executeScript(tab.id, {code: code});

  // Return nothing to let the connection be cleaned up.
  sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onRequest);
