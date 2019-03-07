$(function(){
  var $element = $('.menu');
  var $menu_items = $('.menu__list');
  var menu_item = '.menu__item';

  //выделение выбранного элемента меню
  $menu_items.on('click', menu_item, function() {
    
    $('.menu__item').each(function(i, e) {
      $(e).removeClass('menu__item_active');
    });

    $(this).addClass('menu__item_active');
  });
})