$(function(){
					var num=0;
	                $('#left').click(function(event) {
                    num--;
                    if(num<0){
                        num=3;
                        $('.box').css('left', -50+'%')
                    }
                    $('.box').css('left', -num*70-50+'%');
//                  $('ol li').eq(num).addClass('current');
//                  $('ol li').eq(num).siblings().removeClass('current');
                });
                // 看后一张图片 
                $('#right').click(function(event) {
                    num++;
                    if(num>3){
                        num=0;
                        $('.box').css('left',-50+'%')
                    }
                    $('.box').css('left', -num*70-50+'%');
//                  $('ol li').eq(num).addClass('current');
//                  $('ol li').eq(num).siblings().removeClass('current');
                });
                $('.adban img').hover(function(){
                	$(this).css('transform','scale(1.3)');
                	$(this).css('transition','transform 7.5s linear')
                },function(){
                	$(this).css('transform','none');
                	$(this).css('transition','transform 7.5s linear')
                })
})