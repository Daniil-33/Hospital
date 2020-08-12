$(document).ready(function(){
	//BURGER-MENU	
	$('.burger').on('click', function(){
		var menu = $('.links')

		event.preventDefault();

		$(menu).slideToggle();
	})


	//TABS
	$('.tabs__button').on('click', function(event) {
	   var i, tabcontent, tablinks, currentTab;

	    tabcontent = $('.tab__content');
	    currentTab = $(event.currentTarget).attr('id')

	    for (i = 0; i < tabcontent.length; i++) {
	        $(tabcontent[i]).css({'display' : 'none', 'opacity' : '0'});
	    }

	    
	    tablinks = $('.tabs__button');
	    for (i = 0; i < tablinks.length; i++) {
	        $(tablinks[i]).removeClass('active');
	    }

	    $(`#${currentTab}.tab__content`).css({'display' : 'block', 'opacity' : '1'});
	    $(event.currentTarget).addClass('active');
	})
	$('.defaultOpen').click();
}); 