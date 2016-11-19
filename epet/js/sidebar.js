$("#sidebar").load("sidebar.html",function(){
	$(".sdb").mouseover(function(){
//		console.log( $(this).children(".tan-left"));
		$(this).children(".tan-left,.inLibox,.scart-left,.guanwei-left,.shoucang-left").css("display","block");
		$(this).children(".tan-left").animate({
  				  opacity: 1,
   				 right: "35px",}, 300);
   	})
	$(".sdb").mouseout(function(){
//		console.log( $(this).children(".tan-left"));
		$(this).children(".tan-left,.inLibox,.scart-left,.guanwei-left,.shoucang-left").css("display","none");
		$(this).children(".tan-left").animate({
  				  opacity: 0,
   				 right: "53px",}, 300);
   	})
	$(".gettop").click(function(){
		$("body,html").stop().animate({
					scrollTop:0
				}, 500)
	})
})