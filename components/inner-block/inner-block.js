$(function(){
  var data,
      language,
      content_id;

  var $inner_block = $('.inner-block');
  var $inner_block_info = $('.inner-block__info');

  $(window).on('main:ready', function( event, _data ) {

    var source = document.getElementById( "tmpl-content-info" ).innerHTML;
    template_info = Handlebars.compile(source);

    data = _data;
    language = data.start_language;
    content_id = data.start_content;
    showContent();
  });


  $(window).on("content:changed", function(evt, _content_id) {
    content_id = _content_id;
    showContent();
  });

  $(window).on('language:changed', function(evt, language_name ){
    $inner_block_info.empty();
    language = language_name;
    showContent();
  });

  function showContent(){
    $inner_block.empty();
    var _content = data.content[content_id];

    var content = {};
    content.title = _content.title[language];
    content.columns = _content.columns[language];
    content.language = language;

    var html = template_info( content );
    $( html ).appendTo( $('.inner-block') );
  }


});