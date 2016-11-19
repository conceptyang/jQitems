$("#putong").on("click",function(){
	$(this).css("border-bottom","1px solid #33cb98");
	$("#dongtai").css("border-bottom","1px solid #ddd");
	$(".pt").css("display","block");
	$(".dt").css("display",'none')
});
$("#dongtai").click(function(){
	$("#putong").css("border-bottom","1px solid #ddd");
	$(this).css("border-bottom","1px solid #33cb98");
	$(".pt").css("display","none")
	$(".dt").css("display","block")
});
$(".verifydtm").hover(function(){
	$(this).css("background","#33cb98");
	$(this).children("a").css("color","#fff")
},function(){
	$(this).css("background","#fff");
	$(this).children("a").css("color","#999")
})
$("#loginbtn").click(function(){
	var username = $("#username").val();
	var pwdd = $("#pwd").val();
	var phone = $.cookie("phone")
	var user =$.cookie("user");
	var pwd =$.cookie("pwd");
	if((username==phone||username==user)&&pwdd==pwd){
		window.location.href="home.html";
	}else{
		alert("账户密码不匹配，请重新输入！")
	}
})
