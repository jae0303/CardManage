/*
jQuery(document).ready(function($){
	var tabs = $('.tab-bar');
	
	tabs.each(function(){
		var tab = $(this),
			tabItems = tab.find('button.tab-bar_button'),
			tabContentWrapper = tab.children('ul.list list--material'),
			tabNavigation = tab.find('label');

		tabItems.on('click', 'a', function(event){
			event.preventDefault();
			var selectedItem = $(this);
			if( !selectedItem.hasClass('checked') ) {
				var selectedTab = selectedItem.data('content'),
					selectedContent = tabContentWrapper.find('div[data-content="'+selectedTab+'"]'),
					slectedContentHeight = selectedContent.innerHeight();
				
				tabItems.find('a.checked').removeClass('checked');
				selectedItem.addClass('checked');
				selectedContent.addClass('checked').siblings('div').removeClass('checked');
				//animate tabContentWrapper height when content changes 
				tabContentWrapper.animate({
					'height': slectedContentHeight
				}, 200);
			}
		});

		//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
		checkScrolling(tabNavigation);
		tabNavigation.on('scroll', function(){ 
			checkScrolling($(this));
		});
	});

    	$(window).on('resize', function(){
		tabs.each(function(){
			var tab = $(this);
			checkScrolling(tab.find('label'));
			tab.find('.list').css('height', 'auto');
		});
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});

*/


$(document).ready(function(){

// Default Action
$(".tab-bar_content").hide();
$("label.tab-bar_item").addClass("active").show();
$(".tab-bar_content:first").show();

//On Click Event
$("label.tab-bar_item").click(function() {
	$("label.tab-bar_item").removeClass("active");
	$(this).addClass("active");
	$(".tab-bar_content").hide();
	var activeTab = $(this).find("a").attr("href");
	$(activeTab).fadeIn();
	return false;
});

});