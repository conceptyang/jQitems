$("#content1").load("guojiaguan.html",function(){
		$("#head").hover(function(){
		$(".petClass").css("display","block");
	},function(){
		$(".petClass").css("display","none")
	})
	
	//右侧轮播开始
	oGjgsport();
	$(".brand-bot").hover(function(){
		clearInterval(oGjgTimer);
	},function(){
		oGjgsport();
	});
	var oGjgTimer 
	function oGjgsport(){
		oGjgTimer = setInterval(function(){
		$(".america .slides .slides-one").animate({"left":"-146px"},2000,function(){
			$(this).css("left","0");
			$(this).css("z-index","0");
			$(".slides-two").css("z-index","5");
			$(".slides .slides-two").animate({"left":"-146px"},2000,function(){
				$(this).css("left","0");
				$(this).css("z-index","0");
				$(".slides-one").css("z-index","5");
				});
			});
		},4000)
	}
	//右侧轮播结束
	$(".botimg").hover(function(){
		$(this).stop().animate({"bottom":"20px"},500);
	},function(){
		$(this).stop().animate({"bottom":"10px"},500);
	})
	$(".firstd").hover(function(){
		$(this).css("color","skyblue")
	},function(){
		$(this).css("color","#000")
	})
})
