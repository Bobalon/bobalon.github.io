$(function(){
        $('a').each(function(){
        	console.log($(this).attr('class'));
        	console.log($(this).prop('href'));
        	console.log(window.location.href);
            if ($(this).prop('href') === window.location.href) {
                $(this).addClass('active'); $(this).parents('li').addClass('active');
            }
        });
    });
