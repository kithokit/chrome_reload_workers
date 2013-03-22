var contains;
chrome.extension.onMessage.addListener(function(message,sender,sendResponse){
  checkTabForText(message.text,message.tab);
  contains = false;
});
function checkTabForText(text,tab){
  chrome.tabs.executeScript(tab,{file:"jquery-1.9.1.min.js"});
  chrome.tabs.executeScript(tab,{file:"checkText.js"},function(){
    chrome.tabs.sendMessage(tab, {text:text}, function(response){
      contains = response.contains;
      if(!contains){
        chrome.tabs.reload(tab,function(){
          checkTabForText(text,tab);
        });          
      }
    });
  });    
}
