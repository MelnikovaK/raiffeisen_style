$(function(){
  var $element = $('.language');
  var $language_label = $('.language__label');
  var $language_value = $('.language__value');
  var $language_list,
      $language_item;

  $(window).on('main:ready', function( event, data ) {
    var adding_el = '<ul class="language__list">';

    data.lang.forEach(function(e,i) {
      adding_el += '<li class="language__item">'+ e +'</li>';
    });
    adding_el+='</ul>';
    $language_list = $(adding_el);
    $language_list.appendTo($element);
    $language_value.attr('data-value', data.start_language).text(data.start_language);

    $language_item = $('.language__item');

    //отображение списка языков
    $language_label.on('click', function() {
      $language_list.toggleClass('language__list_opened');
    });

    //выбор языка
    $language_item.on('click', function() {
      $language_value.attr('data-value', $(this).attr('data-value')).text($(this).text());
      $(window).trigger("language:changed", $(this).text() );
    })
   
  });

})