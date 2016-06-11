/* http://touchslider.com/ */

jQuery(function($) {
    $(".touchslider").touchSlider({
		container: this,
		duration: 550, 
		delay: 5000, 
		mouseTouch: true,
		namespace: "touchslider",
		next: ".touchslider-next", 
		pagination: ".touchslider-nav-num",
		currentClass: "current",
		prev: ".touchslider-prev", 
		autoplay: true 
    });
});

 

function init2() {
	//alert(2);
	var _slideNum = jQuery(".innerViewport .touchslider-item").length,
	_paging = "",
	i = 1;
	for(; i <= _slideNum; i++){
		_paging += "<span class='touchslider-nav-num'>"+i+"</span>";
	}
	jQuery(".paginate").html(_paging);
	jQuery(".paginate span:first").addClass("current");
}
init2();
function resizeWin2() {

	jQuery(function($) {
		//alert(jQuery(window).width()+"::"+jQuery("#visual").width());
		//alert($("#subpage_slider_checked").hasClass("pl"));
		if(!$("#subpage_slider_checked").hasClass("pl")){
			$(".touchslider-viewport,.touchslider-item").css({"width":jQuery(".touchslider").width()});
			$(".touchslider-viewport,.touchslider-item img").css({"width":jQuery(".touchslider").width()});
		}else{
			//alert(jQuery("#subpage_slider_checked").width());
			$("#visual").css({"width":jQuery("#subpage_slider_checked").width()});
			$(".touchslider-viewport,.touchslider-item").css({"width":jQuery("#subpage_slider_checked").width()});
			$(".touchslider-viewport,.touchslider-item img").css({"width":jQuery("#subpage_slider_checked").width()});
		}
		$objHeight = $(".touchslider-item img:eq(0)").height();
		//alert($(".touchslider-item img:eq(0)").height());
		$(".touchslider-viewport, .touchslider-item").css({"height":$objHeight});

	});
	//jQuery(".touchslider-viewport,.touchslider-item").css({"height":jQuery(window).height()});
}
resizeWin2();
jQuery($(".touchslider-viewport,.touchslider-item img")).load(function () {
	resizeWin2();
});
jQuery(window).resize(function () {
	resizeWin2();
});

 



