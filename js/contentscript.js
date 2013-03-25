chrome.extension.onMessage.addListener(function(request,sender,sendResponse){

  if (request.message == "start_search"){
    var regex = new RegExp(request.searchText);
     //Test the text of the body element against our regular expression.
    if (regex.test(document.body.innerText)) {
      setTimeout(function(){
        window.location = request.url;
      },1000);
      chrome.extension.sendRequest({message:"not_success_loaded"}, function(response) {});
    } else {
      chrome.extension.sendRequest({message:"success_loaded"}, function(response) {});
    }
  }
});

chrome.extension.sendRequest({message:"contentscript_is_loaded"}, function(response) {});
