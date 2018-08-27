$(function(){
  var mlmMenu = $('.mlm-menu'),
      topMenu = $('.mlm-menu > li > a'),
			subMenu = $('.mlm-submenu'),
			subSubMenu = $( ".mlm-submenu li > a" ).not(".back-btn"),
      parentLi = $('.mlm-menu > li'),
      backBtn = $('.back-btn');
			menuBtn = $('.menu-button');

  topMenu.on('click',function(e){
    var thisTopMenu = $(this).parent();

    parentLi.removeClass('open-submenu');
    thisTopMenu.addClass('open-submenu');
  });

	subSubMenu.on('click', function(e){
		var thisSubSubMenu = $(this).parent();

		thisSubSubMenu.addClass('open-subsubmenu');
	});

  backBtn.click(function(){
		if($(this).hasClass('nested-back')){
			$('.open-subsubmenu').removeClass('open-subsubmenu');
		} else {
			parentLi.removeClass('open-submenu');
		}
  });

	menuBtn.click(function(){
		if($('.menu-button span').hasClass("rotateOff")){
			$('.menu-button span').removeClass("rotateOff");
			$('.menu-button span').addClass("rotateOn");
		  $( ".menu-wrapper" ).animate({
		    right: "0"
		  }, 750, function() {
		    // Animation complete.
		  });
			$('.menu-wrapper').css('display', 'block');
			parentLi.removeClass('open-submenu');
		} else {
			$('.menu-button span').removeClass("rotateOn");
			$('.menu-button span').addClass("rotateOff");
		  $( ".menu-wrapper" ).animate({
		    right: "-500"
		  }, 500, function() {
		    // Animation complete.
		  });
			setTimeout( function(){
				$('.menu-wrapper').css('display', 'none');
			}, 500);
		}
	});

});

/* This function closes the menu if anywhere else on the screen is clicked */

$(document).click(function(e) {
    //if the menu is visible
    if($(".menu-wrapper").css('right') == "0px"){
        //if the click is outside of menu
        if($(e.target).closest('.menu-wrapper').length == 0){
					$('.menu-button span').removeClass("rotateOn");
					$('.menu-button span').addClass("rotateOff");
					$( ".menu-wrapper" ).animate({
						right: "-500"
					}, 500, function() {
						// Animation complete.
					});
					setTimeout( function(){
						$('.menu-wrapper').css('display', 'none');
					}, 500);
        }
    }
});
