$(function() {
  var data;

  $.get("assets/data.json", function(_data) {

    data = _data;
    console.log('#Main: data is loaded: ', _data );

    data.start_language = data.lang[0];
    
    for ( var i in data.content) {
      data.start_content = i;
      break;
    }

    $(window).trigger('main:ready', data );
  });
});