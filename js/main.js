$(document).ready(function() {
	
		/*____LEFT SIDEBAR______*/
	$('.sidebar ul li').click(function() {
		$('.submenu').slideUp(400);
		$(this).find('.submenu').slideDown(400);
	});
	
	
			/*________SLIDER__________*/	
	$(".small_block a").click(function(event) {
        if ($(".main_photo").attr("src") != $(this).attr("href")) {
            $(".main_photo").hide().attr("src", $(this).attr("href")).fadeIn(500);
            $(".small_block a").removeClass('border');
            $(this).addClass('border');
			$('.enlarge').attr('href', $(this).attr("href"));
        }
        event.preventDefault();
    });
	
			/*_________TABS_________*/	
	$('.tab').click(function(event) {
		var i = $(this).attr('href');
		if(!$(this).hasClass('opened')) {
			$('.tab').removeClass('opened');
			$('.tab_content').hide();
			$('#tab'+i).show(100);
			$(this).addClass('opened');	
		}
		event.preventDefault();
	});

			/*___BOTTOM TABS___*/	
	$('.tab_bottom').click(function(event) {
		var i = $(this).attr('href');
		if(!$(this).hasClass('opened')) {
			$('.tab_bottom').removeClass('opened');
			$('#tab_bottom1, #tab_bottom2, #tab_bottom3').hide();
			$('#tab_bottom'+i).show(100);
			$(this).addClass('opened');	
		}
		event.preventDefault();
	});	
	
	/*SLIDER FOR SMALL DEVICES*/
	$('#show-aside').click(function() {
		$('#after').fadeIn(400);
		$('aside').animate({'left': '0px'}, 400);
	});
	
	$('#after').click(function() {
		$('#after').fadeOut(400);
		$('aside').animate({'left': '-300px'}, 400);
	});
		
});