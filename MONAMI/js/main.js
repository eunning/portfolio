$(document).ready(function(){

// 헤더 백스라운드
(function(){

	$(document).scroll(function(){
		if($(window).scrollTop()<10){

			$('header').addClass('top');
		} else {

			$('header').removeClass('top');
		}
	}).scroll();
})();



// HEADER MENU *********************
(function(){
	$('.hdgnb li').hover(function(){
		$(this).find('.detail').stop().slideDown(500);
	}, function(){
		$(this).find('.detail').stop().slideUp(800);

	});
})();

// HEADER (MENU) VS (GNB) Z-INDEX *********************
(function(){

	$(".gnb label").hover(function(){
		
		$('#hdwrap').css('z-index', '9999');

	}, function(){

		$('#hdwrap').css('z-index', '5');
	});

})();

(function(){

	$(".gnb .serch_detail").hover(function(){
		
		$('#hdwrap').css('z-index', '9999');

	}, function(){

		$('#hdwrap').css('z-index', '5');
	});

})();

// HEADER SIDE MENU CATEGORY TAB *********************
(function(){

	$("#menu_cate_wrap .cate .tit").click(function(){
		
		var idx = $(this).parent().index();

		$('#menu_cate_wrap .cateMove').removeClass('active').stop().slideUp(500).eq(idx-1).addClass('active').stop().slideDown(500);
		$('#menu_cate_wrap .cate .tit').removeClass('cateclick');
		$(this).toggleClass('cateclick');

	});

})();

// HEADER SIDE MENU language *********************
(function(){

	$(".select").click(function(){

		$('.select').removeClass('m_click');
		$(this).toggleClass('m_click');

	});

})();

// CONTAINER VISUAL *********************
(function(){
	var owl = $('.visualSlide');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true
	});
	$('.play').on('click',function(){
	    owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
	    owl.trigger('stop.owl.autoplay')
	});
})();

// CONTAINER NEW ARRIVALS PROD *********************
(function(){
	$(".newslide").owlCarousel({
		loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{	
	        	items:1
	   		},
	        600:{
	            items:2
	    	},
	        1000:{
	            items:4
	    	}
	    	
		}
	});
})();

// CONTAINER NEW ARRIVALS HOVER *********************
(function(){

    $('.item a').hover(function(){

		$(this).find('.hoverBx').show();

	}, function(){

		$(this).find('.hoverBx').hide();


    });

})();

// CONTAINER NEW ARRIVALS COLOR CLICK ********************* owl 밑에있어야 되 CLONE이 실행 된 다음에 되어야 해서 
(function(){

	$('.colorP i').click(function(){

		var O = $(this).parent('.colorP');

		var idx = O.find(this).index();

		O.find('i').removeClass('active');
		$(this).addClass('active');

		return false;

	});

})();

// CONTAINER BEST PRODUCT PROD *********************
(function(){
	$(".bpTab a").click(function(){
		
		var bpidx = $(this).index();

		$('.bpBx').hide().eq(bpidx).show();
		$('.bpTab a').removeClass('bpclick');
		$(this).toggleClass('bpclick');

		var bpidx2 = $(this).index();

		$('.bpline').hide().eq(bpidx2).show();
		$('.bpTab .bpline').removeClass('bpclick');
		$(this).toggleClass('bpclick');
		
		return false;

	});
})();

// CONTAINER POPUP *********************
(function(){
	$(document).ready(function(){
		$(".puClose").click(function(){
		
			$('.popup').hide();
		})

	});
})();


});