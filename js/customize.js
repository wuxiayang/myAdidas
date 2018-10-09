$(function(){
	$('.topb').click(function(event){
		console.log("1");
		$('html,body').animate({'scrollTop':'0px'},1000);
	})	
})