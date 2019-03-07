$(function(){
  var $element = $('.menu');
  var $menu_items = $('.menu__list');
  var menu_item = '.menu__item';

  var data,
      content_id = 'safe-and-multiply',
      language;

  $(window).on('main:ready', function( event, _data ) {

    data = _data;
    language = data.start_language;


    //HANDLEBARS
    var source = document.getElementById( "tmpl-sidebar-menu" ).innerHTML;
    template = Handlebars.compile(source);
    init_menu( content_id );
  });

  $(window).on("language:changed", function(evt, language_name) {
    language = language_name || data.start_language;
    $menu_items.empty();
    init_menu(content_id);
    
  });


  function init_menu(page) {
    $menu_items.empty();
    var _menu = data.menu;
    var menu = {};
    var html = '';
    _menu.forEach( function(e,i) {
      menu.title = e.title[language];
      menu.href = e.href;
      menu.content_id = e.content_id;
      menu.language = language;
      if (e.content_id == page ) {
        menu.class = 'menu__item_active';
        console.log(page)
      }
      if (menu.title == undefined) menu.class = 'menu__item_line';
      html += template(menu);
      menu.class = undefined;
    });

    $( html ).appendTo( $( '.menu__list' ) );
  }

  //выделение выбранного элемента меню
  $menu_items.on('click', menu_item, function() {
    content_id = $(this).data('content-id');
    $('.menu__item').each(function(i, e) {
      $(e).removeClass('menu__item_active');
      if( data.content[content_id].title[language] == $(e).text()) {
        $(e).addClass('menu__item_active');
      }
    });
    $(window).trigger("content:changed", $(this).data('content-id') );
  });
})