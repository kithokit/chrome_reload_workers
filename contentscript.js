chrome.extension.onMessage.addListener(function(request,sender,sendResponse){

  if (request.message == "start_search"){
    var regex = new RegExp(request.searchText);
    //var regex = /Server Busy/;
     //Test the text of the body element against our regular expression.
    if (regex.test(document.body.innerText)) {
      setTimeout(function(){
        window.location = "http://" + request.url;
        //window.location = "http://www.urbtix.hk";
      },1000);
    } else {
      chrome.extension.sendRequest({message:"success_loaded"}, function(response) {});
    }
  }
});

chrome.extension.sendRequest({message:"contentscript_is_loaded"}, function(response) {});
