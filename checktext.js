chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  var contains = $(':contains('+message.text+')');
  if(contains.length > 0)
   sendResponse({contains:true});
  else
   sendResponse({contains:false});
});
