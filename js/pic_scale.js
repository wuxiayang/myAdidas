$(function(){
	                $('.adban img').hover(function(){
                	$(this).css('transform','scale(1.3)');
                	$(this).css('transition','transform 7.5s linear')
                },function(){
                	$(this).css('transform','none');
                	$(this).css('transition','transform 7.5s linear')
                })
})