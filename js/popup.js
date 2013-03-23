$(function(){
  $('#searchButton').click(function(){
    //create instance
    url = $('#searchUrl').val();
    searchtext = $('#searchText').val();
    number = $('#numOfBrowser').val();
    timeout=0;
    for (i=0;i<number; ++i){
      chrome.tabs.create({url: "http://" + url});
    };    
  });
});
