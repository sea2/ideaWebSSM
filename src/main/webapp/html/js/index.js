var swipeBanners = new Swipe($('.swipe_banners ')[0], {
	callback : function(e, index){
		$('.swipe_bars li').removeClass('current');
		$('.swipe_bars li').eq(index).addClass('current');
	},
    auto : 0
});