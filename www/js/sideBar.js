$(function(){
	var btn = $('.xiala');
	var sideBar = $('#sideBar');
	var head = $('#head');
	var menu = $('#menu li');
	var body = $('body');
	var play = $('.play');
	var l = 0;
	btn.toggle(function(){
		sideBar.stop().animate({'left':l});
		head.stop().animate({'left':'12.726rem'});
		play.stop().animate({'left':'12.726rem'});
		body.addClass('hide');
	},function(){
		sideBar.stop().animate({'left':'-12.726rem'});
		head.stop().animate({'left':0});
		play.stop().animate({'left':0});
		body.removeClass('hide');
	});
	$.each(menu,function(v,i){
		this.click(function(){
			this.setCapture();
			return false;
		})
	})
	
	
	

})