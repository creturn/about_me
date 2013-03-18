$(function() {
	$('.works-list').jScrollPane();
	$('.title').click(function(){
		var theOffset = $(this).parent().position().left;
		if( theOffset > 490 )
			for( var i = 0; i < 5; i++ ){
				var childrenOffset = $('.children:eq('+i+')').position().left;
				if( childrenOffset <= theOffset && childrenOffset > 490  )
					$('.children:eq('+i+')').animate({left:childrenOffset-730})
			}
		else
			for( var i = 0; i < 5; i++ ){
				var childrenOffset = $('.children:eq('+i+')').position().left;
				if( childrenOffset > theOffset && childrenOffset < 490  )
					$('.children:eq('+i+')').animate({left:childrenOffset+730})
			}			
	});
	


});

