var oMyepet = document.getElementsByClassName("myepet");
var oPeo = document.getElementsByClassName("peo");
oPeo[0].onmouseover = function() {
	oMyepet[0].style.display = "block";
}
oPeo[0].onmouseout = function() {
		oMyepet[0].style.display = "none";
	}
	//$(".peo").on("mouseover",function(){
	//	$(".myepet").css("display",'block')
	//})
$(".dropme").on("mouseover", function() {
	$(".probox").css("display", "block");
})
$(".dropme").on("mouseout", function() {
	$(".probox").css("display", "none");
})
$(".dropme .btn").on("mouseover", function() {
	$(this).css("background-position", 'right -115px');
})
$(".dropme .btn").on("mouseout", function() {
	$(this).css("background-position", 'right 0');
})
if($.cookie("phone") != undefined && $.cookie("phone") != "") {

	$(".weidenglu").css("display", "none");
	$(".denglu,.tuichu").css("display", "block");
	$(".denglu").text($.cookie("phone"));
} else {
	$(".weidenglu").css("display", "block");
	$(".denglu,.tuichu").css("display", "none");
}
$(".tuichu").on("click", function() {
	$.removeCookie("phone", {
		expires: 7,
		path: "/"
	});
	$.removeCookie("user", {
		expires: 7,
		path: "/"
	});
	$.removeCookie("pwd", {
		expires: 7,
		path: "/"
	});
	window.location.href = "home.html"
})
//购物车数据加载

$.get("commodity.json", function(data) {
	var value = null;
	var arr = [];
	$.each($.cookie(), function(key, value) {
		var key = parseInt(key)
		if(key > 0) {
			value = JSON.parse(value);
			arr.push(value);
			var prodListData = {
				lists: arr
			};
			var html = template("prodList1", prodListData);
			$("#gougou").html(html);
		}
//		var dj = parseInt($(this).parent().parent().next("td").html())
//		console.log(dj)
	var count=0; //页面加载完车进行初步总计
	for(var i = 0 ;i <$(".dj").length;i++){
		var ddj=parseFloat($(".dj").eq(i).html());
		count += ddj;
	}
	
	$(".count").html("￥"+count);
		$(".add1").click(function() {
			var shopcartnum =$(this).siblings("input").val()
			shopcartnum++;
			$(this).siblings("input").val(shopcartnum);
			var dj= $(this).parent().parent().next("td").attr("jg"); // 获取当前商品的单价
			var a = dj*shopcartnum;
			$(this).parent().parent().next("td").html(a) //当前商品小计
			var count=0;                                //每次点击进行商品总计
			for(var i = 0 ;i <$(".dj").length;i++){
				var ddj=parseFloat($(".dj").eq(i).html());
				count += ddj;
			}
			$(".count").html("￥"+count);
			
		})
		$(".less1").click(function() {
			 var shopcartnum = $(this).siblings("input").val()
			shopcartnum--;
			if(shopcartnum < 1) {
				shopcartnum = 1;
			}
			$(this).siblings("input").val(shopcartnum);
			
			var dj= $(this).parent().parent().next("td").attr("jg"); // 获取当前商品的单价
			var a = dj*shopcartnum;
			$(this).parent().parent().next("td").html(a) //当前商品小计
			var count=0;                                //每次点击进行商品总计
			for(var i = 0 ;i <$(".dj").length;i++){
				var ddj=parseFloat($(".dj").eq(i).html());
				count += ddj;
			}
			$(".count").html("￥"+count);
			
			
		})
		$(".delate").click(function(){
			$.removeCookie($(".delate").attr("name"),{expires:7,path:"/"});
			window.location.href="shoppingcar.html"
			
		})
		
	});
})

