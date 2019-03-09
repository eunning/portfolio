$(document).ready(function(){


//  SUBTAB 과 SUBNAV 연동 *********************
(function(){

	$("#copyCt .tab a").add('.navSelect nav label').click(function(){
		
		var idx = $(this).index();
		var txt = $(this).text();


		$('#copyCt .tabBx .copy').hide().eq(idx).show();
		$('#copyCt .tab a').removeClass('infoclick');
		$("#copyCt .tab a").eq(idx).addClass('infoclick');

		$('.navSelect .selected').text(txt);
		$('.navSelect nav').slideUp();
		
		return false;

	});

	$('.navSelect').click(function(){
		$(this).find('nav').slideToggle();
	});


	// tab 연결
	var tabIndex = location.search.charAt(5)*1-1;
	if (tabIndex<0) tabIndex=0;
	$('.tab a').eq(tabIndex).click();

})();

//  PENTAB 과 PENBX TAB *********************
(function(){
	$(".penTab a").click(function(){
		
		var idx = $(this).index();

		$('.penBx').hide().eq(idx).show();
		$('.penTab a').removeClass('penclick');
		$(this).toggleClass('penclick');
		
		return false;

	});
})();

//  PROD LISTTAB  *********************
(function(){
	$(".listTab a").click(function(){
		
		var idx = $(this).index();

		$('.penBx ul').hide().eq(idx).show();
		$('.listTab a').removeClass('listclick');
		$(this).toggleClass('listclick');
		
		return false;

	});
})();

//  MUSEUM LISTTAB  *********************
(function(){
	$(".listTab a").click(function(){
		
		var idx = $(this).index();

		$('#musiumCt ul').hide().eq(idx).show();
		$('.listTab a').removeClass('listclick');
		$(this).toggleClass('listclick');
		
		return false;

	});
})();

(function(){

	$(".faq_box").click(function(){
		
		$(this).toggleClass("on");
		$(this).find(".answer").slideToggle();

	});

})();

});