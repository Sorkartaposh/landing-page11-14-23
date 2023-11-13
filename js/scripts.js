(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		// owl carousel
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:35,
			nav:false,
			autoplay:false,
			autoplayTimeout:2000,
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:2
				},
				800:{
					items:4
				},
				1000:{
					items:8
				}
			}
		})

				
		
		
		
		
		
		
		
		
	});
})(jQuery);