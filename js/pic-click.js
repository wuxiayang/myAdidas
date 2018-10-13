$(function(){
					var num=0;
	                $('#left').click(function(event) {
                    num--;
                    if(num<0){
                        num=3;
                        $('.box').css('left', -50+'%')
                    }
                    $('.box').css('left', -num*70-50+'%');
                });
                // 看后一张图片 
                $('#right').click(function(event) {
                    num++;
                    if(num>3){
                        num=0;
                        $('.box').css('left',-50+'%')
                    }
                    $('.box').css('left', -num*70-50+'%');
                });

})