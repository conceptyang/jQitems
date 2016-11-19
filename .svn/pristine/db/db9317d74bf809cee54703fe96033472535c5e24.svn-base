$("#one-floor").load('mhtml/one-floor.html',function(){
	$.get('json/floor.json',function(data){
		var arr=[];
		
		$.each(data,function(index,value){
				arr.push(this);
				var prodListData={lists:arr};
				var html = template("onedata",prodListData);
				$("#one-floor").html(html);
		})
	})
})