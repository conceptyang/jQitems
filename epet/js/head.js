
$("#head").load("head.html",function(){
var oMyepet = document.getElementsByClassName("myepet");
var oPeo = document.getElementsByClassName("peo");
oPeo[0].onmouseover=function(){
	oMyepet[0].style.display = "block";
}
oPeo[0].onmouseout=function(){
	oMyepet[0].style.display = "none";
}
//$(".peo").on("mouseover",function(){
//	$(".myepet").css("display",'block')
//})
$(".dropme").on("mouseover",function(){
	$(".probox").css("display","block");
})
$(".dropme").on("mouseout",function(){
	$(".probox").css("display","none");
})
$(".dropme .btn").on("mouseover",function(){
	$(this).css("background-position",'right -115px');
})
$(".dropme .btn").on("mouseout",function(){
	$(this).css("background-position",'right 0');
})

$(".petselct").on("mouseover",function(){
	$(".cate1").css("background-position","0 -1257px")
	$(".petselct .select1").css("display","block")
	$(this).css("color","#999")
	$(".zhao").css("display","none");
})
$(".petselct").on("mouseout",function(){
	$(".cate1").css("background-position","-17px -1257px")
	$(".petselct .select1").css("display","none")
	$(this).css("color","#666")
	$(".zhao").css("display","block");
})
$(".cla").on("mouseover",function(){
	$(".cate2").css("background-position","-17px -1276px")
	
	$(this).css("color","#fff")
})
$(".cla").on("mouseout",function(){
	$(".cate2").css("background-position","0 -1276px")
	$(this).css("color","#666")
	
})
//商品分类右侧效果
$(".zhao").on("mouseover",function(){
	$(".dogs").css("display",'block')
})
$(".zhao").on("mouseout",function(){
	$(".dogs").css("display",'none')
})

$("#petlist li").on("mouseover",function(){
	$(this).children("span").css("margin-left","50px");
//	$(this).siblings().css("border-right","1px solid green")
	$(this).css({"border-bottom":"1px solid green","border-top":"1px solid green"});
	$(this).prev().css("border-bottom","none")
	$(this).css({"z-index":"2000","background":"#fff"})
})
$("#petlist li").on("mouseout",function(){
	$(this).children("span").css("margin-left","25px")
	$(this).css({"border-bottom":"1px dotted #ccc","border-top":"none"});
	$(this).prev().css("border-bottom","1px dotted #ccc")
//	$(this).siblings().css("border-right","none")
	$(this).css({"z-index":"1","background":"#fcfcfc"})
})
$("#petlist li").hover(function(){
		var $index = $(this).index();
		$(".dog_l").children().css("display",'none')
		$(".dog_l").children().eq($index).css("display",'block')
	},function(){
	});

	if($.cookie("phone")!=undefined&&$.cookie("phone")!=""){
		
		$(".weidenglu").css("display","none");
		$(".denglu,.tuichu").css("display","block");
		$(".denglu").text($.cookie("phone"));
	}else{
		$(".weidenglu").css("display","block");
		$(".denglu,.tuichu").css("display","none");
	}
	$(".tuichu").on("click",function(){
		$.removeCookie("phone",{expires:7,path:"/"});
		$.removeCookie("user",{expires:7,path:"/"});
		$.removeCookie("pwd",{expires:7,path:"/"});
		window.location.href = "home.html"
		
	})
	
//		$("#ss").focus(function(){
//			$("#ss").keyup(function(ev){
//				ev= ev ||event;
//				var val = $("#ss").val();
//				var oScript = document.createElement("script");
//				oScript.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+val+'&cb=yl';
//				document.body.appendChild(oScript);
//				document.body.removeChild(oScript);
//			})
//		})
//		function yl(data){
//			 str = "";
//			for(var i= 0 ;i<data.s.length;i++ ){
//				str += '<li><a href="https://www.baidu.com/s?wd='+data.s[i]+'" target = "_blank" >'+data.s[i]+'</li>';
//			}
//			$("#searchresult").html(str);
//			$("#searchresult").css("display","block");
//		}

})



