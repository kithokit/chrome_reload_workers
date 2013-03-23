chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
     console.log(request.search);
});



var regex = /Server Busy/
// Test the text of the body element against our regular expression.
if (regex.test(document.body.innerText)) {
  // The regular expression produced a match, so notify the background page.
  //var choose = document.getElementById('toMainButton');
  //setTimeout(function(){ choose.click(); } , 1500 ) ;
  chrome.extension.sendRequest({}, function(response) {});
} else {
  
}
