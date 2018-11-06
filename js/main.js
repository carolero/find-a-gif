function getData() {

  var input = $("#searchtext").val()

  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q= "+input+"&api_key=ad9y2Me3nNIEkH96ABSkEa2q9qOHC0Ea&limit=30");

xhr.done(function(response) {
  console.log("success got data", response); 

  var jiffs = response.data

  for (i in jiffs)
  {
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:300px; width:300px;'/>")
  }

});
}


