jQuery(document).ready (function(){
	/*jQuery(".skip-cart").on("click", function(){
	
	jQuery(".block-cart").slideToggle('slow');
	});*/
	
	
	
	
	   jQuery("#scroller").owlCarousel({ 
	   loop:true,
		margin:15,
		 nav:true,
		 dots:false,
		 responsive:{
			0:{
				items:2
			},
			481:{
				items:3
			},
			641:{
				items:4
			},
			800:{
				items:5
			},
			1023:{
				items:6
			}
		}
});
		
		jQuery("#scroller").owlCarousel({
		 
		loop:true,
		autoplay: false,
		items:6,
		margin: 15,
		navText:false,
		mouseDrag:true
		});
		
		jQuery("#scroller").owlCarousel({
		 
		loop:true,
		autoplay: false,
		items:6,
		margin: 15,
		navigation:true,
		navText:false,
		mouseDrag:true
		});
	 
});
