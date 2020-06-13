var swipeBanners = new Swipe($('.swipe_banners ')[0], {
	callback : function(e, index){
		$('.swipe_bars li').removeClass('current');
		$('.swipe_bars li').eq(index).addClass('current');
	},
    auto : 0
});






var arr = new Array(3);


function login(str,callback) {
    arr[0]=callback;
}



function loginBack() {
    arr[0]({"key":1,"key2":2});
}


