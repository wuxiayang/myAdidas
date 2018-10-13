$(function(){
	            var num=0;
        		var timee;	           
	        	 //轮播图
        		function zou(){
        			timee=setInterval(function(){
        			num=num+1;
        			if(num>8)
        			{
        				num=0; 
                        $('.nul').css('left', -25*num+'%'); 
                num=1;
        			}
        			
        		$('.nul').animate({'left':-25*num+'%'})

        		},3000);	
        		}
        		zou();
        		//商品轮播图
        		$(".left").click(function(event){
        			$(this).toggleClass("le2");
							num--;
                    if(num<0){
                        num=3;
                    }
                    $('.nul1').css('left', -num*50+'%');
                    $('.hotsale>ol li').eq(num).addClass('current');
                    $('.hotsale>ol li').eq(num).siblings().removeClass('current');        			
        		})
        		$(".right").click(function(){
        			$(this).toggleClass("ri2");
 							num++;
                    if(num>3){
                        num=0;
                    }
                    $('.nul1').css('left', -num*50+'%');
                    $('.hotsale>ol li').eq(num).addClass('current');
                    $('.hotsale>ol li').eq(num).siblings().removeClass('current');        			
        		})

                // 点击索引
                $('.hotsale>ol li').click(function(event) {
                    num=$(this).index();
                    $('.nul1').css('left', -num*50+'%');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                });
})