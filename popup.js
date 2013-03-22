$(function(){
  var tabId;
  chrome.tabs.query({active:true,currentWindow:true}, function(tab) {
    url2 = $('#searchUrl').val(tab[0].url);
    tabId = tab[0].id;
  });
  $('#searchButton').click(function(){
    console.log("KIT2");
    url = $('#searchUrl').val();
    console.log(url);
    chrome.tabs.create({url: "http://" + url});
    //chrome.tabs.getSelected(null, function(tab) {
      //var code = 'window.location.reload();';
      //chrome.tabs.executeScript(tab.id, {code: code});
    //})
    //chrome.extension.sendMessage({
      //text:$('#searchText').val(),
      //tab:tabId
    //});
  });
});
