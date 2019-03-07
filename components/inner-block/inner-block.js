$(function(){
	var data,
			language,
			content_id;

	var $inner_block = $('.inner-block');
	var $inner_block_info = $('.inner-block__info');

	$(window).on('main:ready', function( event, _data ) {
		data = _data;
		language = data.start_language;
		content_id = data.start_content;
		showContent();
	});

	$(window).on('language:changed', function(evt, language_name ){
		$content.empty();
		language = language_name;
		//init_content();
	});

		function showContent(){
			$inner_block_text.empty();
			var _content = data.content[content_id];

			var content = {};
			content.title = _content.title[language];
			content.texts = _content.texts[language];
			content.language = language;

			var html = template( content );
			// $( html ).appendTo( $( '.content' ) );
		}


});