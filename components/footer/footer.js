$(function(){
  var $element = $('.footer');
  var $footer_text = $('.footer__text');
  var $download_services = $('.download-services');
  var $download_text = $('.download-services__text');

  var data,
      language;

   $(window).on('main:ready', function( event, _data ) {
    data = _data;
    language = data.start_language;

    //HANDLEBARS
    var source_footer = document.getElementById( "tmpl-footer" ).innerHTML;
    template_footer = Handlebars.compile(source_footer);
    // var source_download = document.getElementById( "tmpl-download-link").innerHTML;
    // template_download = Handlebars.compile(source_download);
    init_footer();
  });

  $(window).on("language:changed", function(evt, language_name) {
    language = language_name || data.start_language;
    $element.empty();
    // $download_services.empty();
    init_footer();
    
  });

  
  function init_footer() {
    var _footer = data['footer_raifeissen'];
    var _download_services = data['download_link'];
    var footer = {};
    footer.text = _footer[language];
    var html = template_footer( footer );
    $( html ).appendTo( $('.footer') ); 

    // var download_services = {};
    // download_services.text = _footer[language];
    // var html = template_download( download_services );
    // $( html ).appendTo( $('.download-services') );


  }


})