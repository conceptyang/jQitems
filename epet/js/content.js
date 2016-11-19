$("#content").load("content.html",function(){
	//内容部分大轮播开始
	var bTimers = null;
	var timernum = 0;
	$(".bannerbox ul li").hover(function(){
		$(this).siblings().css({"background":"#999","color":"#fff"});
		var index = $(this).index();
		timernum =index;
		$(this).css({"background":"#fff","color":"#999"});
		$(".bannerbox div").css("display","none");
		$(".bannerbox div").eq(index).css("display","block");
		var cl=$(".bannerbox div").eq(index).attr("bgc")
		$(".bannerbox").css('background',cl);
		$(".cla").css('background',cl);
		$(".bannerbox div").eq(index).css("display","block")
		$(".bannerbox ul li").eq(index).css({"background":"#fff","color":"#999"})
	},
	function(){
		var index = $(this).index();
		$(this).css({"background":"#999","color":"#fff"});
	});
	timer();
	$(".bannerbox").hover(function(){
		clearInterval(bTimers);
	},function(){
		timer();
	})
	function timer(){
		bTimers = setInterval(function(){
		timernum++;
		$(".bannerbox ul li").css({"background":"#999","color":"#fff"})
		$(".bannerbox div").css("display","none");
		if(timernum>6){
			timernum=0;
		}
		var cl=$(".bannerbox div").eq(timernum).attr("bgc")
		$(".bannerbox").css('background',cl);
		$(".cla").css('background',cl);
		$(".bannerbox div").eq(timernum).css("display","block")
		$(".bannerbox ul li").eq(timernum).css({"background":"#fff","color":"#999"})
		},3000);
	}
	//大轮播结束
	//大轮播右边效果
	$(".banner-right div img").hover(function(){
		$(this).stop().animate({"margin-left":"-10px"},500)
	},function(){
		$(this).stop().animate({"margin-left":"0"},500)
	})
	//大轮播右边效果结束
	//抢购拼接开始
	var str='';
	$.ajax({
		type:"get",
		url:"rushbuy.json",
		async:true,
		success:function(data){
			for(var i = 0;i<data.length;i++){
				str += "<div class='qG1'><div class='qg-top'><div class='qgpic'><img src="+data[i].src+"/></div><p class='qgbq'><span>"+data[i].bq1+"</span><span>"+data[i].bq2+"</span></p><div class='qgms'>"+data[i].qgms+"</div>"
				str += "<div class='qgjg'><b>￥</b><span class='nowjg'>"+data[i].nowjg+"</span><span class='overjg'>"+data[i].overjg+"</span></div><div class='jgborder'></div>"
				str += "</div><div class='qg-bot'><a href='javascript:;' class='qgstate'>立即抢购</a></div></div>"
			}
			str +="<a class='left' href='javascript:;'>&lt;</a><a class='right'  href='javascript:;'>&gt;</a>";
			$(".jxr-bottom .ov").html(str);
			$(".jxr-bottom").hover(function(){
				$(".jxr-bottom .right,.left").css("display","block");
			},function(){
				$(".jxr-bottom .right,.left").css("display","none");
			})
			var num = 0;
			$(".jxr-bottom .right").on("click",function(){
				if(data.length-num >=5){
					$(".qG1").eq(num).css({"display":"none"})
					$(".qG1").eq(num+4).css({"display":"block"})
					num++;
				}
				if(num>=data.length-1){
					num=data.length-1;
				}
			})
			$(".jxr-bottom .left").on("click",function(){
				if(num>=data.length-1){
					num=data.length-1;
				}
				num--;
				if(num<0){
					num=0;
				}
				if(num==data.length-1){
					$(".qG1").eq(num).css({"display":"none"})
					$(".qG1").eq(num-4).css({"display":"block"})
				}else{
					$(".qG1").eq(num-4).css({"display":"none"})
					$(".qG1").eq(num).css({"display":"block"})
				}
			})
		}
	});
	//抢购拼接结束
	
//	品牌街轮播开始
	var ppjnum = 0;
	setInterval(function(){
		
		$(".ppj-lb-t li").css("display","none");
		$(".ppj-lb-b li").css("background","#fff");
		ppjnum++;
		if(ppjnum==4){
			ppjnum=0;
		}
		$(".ppj-lb-b li").eq(ppjnum).css("background","#f60");
		$(".ppj-lb-t li").eq(ppjnum).css("display","block")
	},1000)
//品牌街轮播结束
//品牌街中部效果开始
$(".ppj-mid .clearfix li").hover(function(){
	$(this).children("p").stop().fadeIn(500);
},function(){
	$(this).children("p").stop().fadeOut(500);
})
//品牌街中部效果结束

//楼层图片效果
	$(".eight img").hover(function(){
		$(this).stop().animate({"margin-top":"0"},500)
	},function(){
		$(this).stop().animate({"margin-top":"5px"},500)
	})
	
	$.get("floorcontent.json",function(data){
		var arr = [];
		$.each(data,function(){
			arr.push(this);
			var proData = this.eightimg1;
			var prodlisData = {lists:arr,list:{proData1:proData}};
			var html = template("prodList",prodlisData);
			$(".floor1").html(html)
		/*	var html1 = template("con_one_21",proData);
			$("#con_one_2").html(html1);*/
		})
		//一楼tab切换效果开始
		$(".righttitle ul li").hover(function(){
			var $rindex = $(this).index();
			$(this).css({"border-left":"1px solid #459d36","border-right":"1px solid #459d36","border-top":"1px solid #459d36","margin-left":"-2px","border-bottom":" 1px solid #fff"});
			$(this).children("div").css("border-top","2px solid #459d36");
			$(this).children("div span").css("border-right","none");
			$(this).parent().parent().next().children().css("display","none");
			$(this).parent().parent().next().children().eq($rindex).css("display","block");
		},function(){
		$(this).css({"border-left":"#fff","border-right":"1px solid #fff","border-top":"1px solid #e7e7e7","margin-left":"0","border-bottom":" 1px solid #459d36"});
		$(this).children("div").css("border-top","2px solid #fff");
		$(this).children("div span").css("border-right","1px solid #e7e7e7;");
		})
		//一楼tab切换效果结束
	})	
})