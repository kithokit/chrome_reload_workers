$(function(){

  $('#searchUrl').val(localStorage["url"]);
  $('#searchText').val(localStorage["searchText"]);
  $('#numOfBrowser').val(localStorage["number"]);

  $('#searchButton').click(function(){
    url = $('#searchUrl').val();
    searchtext = $('#searchText').val();
    number = $('#numOfBrowser').val();
    chrome.extension.sendRequest({ 
      url: url, 
      number: number,
      searchText: searchtext,
    }, function(response){});
    chrome.browserAction.setBadgeText({text: "Fire!"});
  });
});
