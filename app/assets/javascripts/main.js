jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger, ul.cd-primary-nav li a').on('click', function(event){
		event.preventDefault();

		//stop if nav animation is running 
		// if( !isLateralNavAnimating ) {
		// 	if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
		// 	$('body').toggleClass('navigation-is-open');
		// 	$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		// 		//animation is over
		// 		isLateralNavAnimating = false;
		// 	});
		// }
		console.log($(this).attr('data-location'));
		if ($(this).attr('data-location'))
		{
			$.ajax({
				url: $(this).attr('data-location'),
				cache: false,
				success: function(data) {
					console.log('Data Received from the Ajax call', data);
			          //put additional codes here to update html, etc.
			          //for example things like
			          $('body').html(data);
				}
			}).done(function(){
				if( !isLateralNavAnimating ) {
					if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
					
					$('body').toggleClass('navigation-is-open')
					$('.zindex').toggleClass('navigation-is-open');
					$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						//animation is over
						isLateralNavAnimating = false;
					});
					
				}
			});
		} else {
			if( !isLateralNavAnimating ) {
				if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
				
				$('body').toggleClass('navigation-is-open');
				$('.zindex').toggleClass('navigation-is-open');
				$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//animation is over
					isLateralNavAnimating = false;
				});
			}
		}
      return false;
	});

	$('#slides').superslides({
    animation_easing: 'easeInOutCubic',
    inherit_height_from: '#slides',
    animation_speed: 1000,
    pagination: true,
    hashchange: false,
    scrollable: true,
    play: 0
  });
});