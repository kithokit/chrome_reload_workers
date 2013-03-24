$(function(){
  $('#searchButton').click(function(){
    url = $('#searchUrl').val();
    searchtext = $('#searchText').val();
    number = $('#numOfBrowser').val();
    chrome.extension.sendRequest({ 
      url: url, 
      number: number,
      searchtext: searchtext,
    }, function(response){});
  });
});
