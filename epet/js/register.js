$(".huoqu").hover(function(){
	$(this).css("background",'#33cb98');
	$(this).children("a").css("color","#fff")
},function(){
	$(this).css("background",'#fff');
	$(this).children("a").css("color","#999")
})
panduan("#phone",/^\d{11}$/);
panduan("#yonghuming",/^\w{4,10}$/);
panduan("#mima",/^\w{8,20}$/);

function panduan(obj,reg1){
	$(obj).blur(function(){
		var pValue = $(this).val();
		var reg = reg1;
		if(reg.test(pValue)){
			$(this).siblings(".success").css("display","block")
			$(this).siblings(".reminder").css("display","none")
		}else{
			$(this).siblings(".success").css("display","none")
			$(this).siblings(".reminder").css("display","block")
		}
	})
}
$("#mima1").blur(function(){
	var miVal = $(this).val();
	var miVal1 = $("#mima").val();
	if(miVal){
		if(miVal==miVal1){
			$(this).siblings(".success").css("display","block")
			$(this).siblings(".reminder,.reminder1").css("display","none")
		}else{
			$(this).siblings(".success,.reminder").css("display","none")
			$(this).siblings(".reminder1").css("display","block")
		}
	}else{
		$(this).siblings(".success,.reminder1").css("display","none")
		$(this).siblings(".reminder").css("display","block")
	}
})
$("#registerbtn").click(function(){
	$.cookie("phone",$("#phone").val(),{expires:7,path:"/"});
	$.cookie("user",$("#yonghuming").val(),{expires:7,path:"/"});
	$.cookie("pwd",$("#mima").val(),{expires:7,path:"/"});
	window.open("login.html")
})

