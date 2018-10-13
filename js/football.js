$(function(){
				$(".shoename>li").click(function(){
					i=$(this).index();
					$(this).addClass("showbg");
					$(this).siblings().removeClass("showbg");
					$(".shoelist").eq(i).addClass("showon");
					$(".shoelist").eq(i).siblings().removeClass("showon");
				})
	            $('.shoeh').hover(function(){
	            	$(this).children('.shoeh1').css('display','none');
	            	$(this).children('.shoeh2').css({'display':'block','background':'black','color':'white'});
	            },function(){
	            	$(this).children('.shoeh1').css('display','block');
	            	$(this).children('.shoeh2').css({'display':'none','background':'white','color':'black'});
	            })
	            
	            
	             var timer;
                var num=0;
                function gogo(){
                    clearInterval(timer)
                    timer=setInterval(function(){
                        num++;
                        if(num>3){
                            num=0;
                        }
                        // 让ul左移;
                        $('.th').css('top', -num*100+'%');
                        // 对应的圆圈增加类
                        $('.th>li').eq(num).addClass('cycle');
                        // 兄弟姐妹删除类
                        $('.threeroll>ol li').eq(num).siblings().removeClass('cycle');
                        // $('ol li').eq(num).addClass('current').siblings().removeClass('current');
                    },1000)
                }
                gogo();
                
                $('.threeroll>ol li').click(function(event) {
                    num=$(this).index();
                    $('.th').css('top', -num*100+'%');
                    $(this).addClass('cycle');
                    $(this).siblings().removeClass('cycle');
                });
                
                $('.inspirationimg img').hover(function(){
                	$(this).css('opacity','1');
                	$(this).parent().siblings().children('img').css('opacity','.7');
                },function(){
                 	$(this).css('opacity','1');
                	$(this).parent().siblings().children('img').css('opacity','1');               	
                })
            
})