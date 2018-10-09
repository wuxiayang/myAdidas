$(function(){
	          var num=0;
        		var timee;
            var n=0;
	  			$('.pclistul>li').hover(function(){
				  	 $(this).css('background','white');
				  	 $(this).children('a').css('color','black');
				  	  $(this).children('div').css('display','block');
				  },function(){
				  	$(this).css('background','black');
				  	 $(this).children('a').css('color','white');
				  	  $(this).children('div').css('display','none');
				  })
        		$('.search-pc>input').focus(function(){
        			$('.glass>i').removeClass('gl1').addClass('gl2');
        			$(this).removeClass('ip1').addClass('ip2');
        			$('.col').css('display','inline-block');
        			$('.box-pc').css('display','block');
        		})
        		$('.search-pc>input').blur(function(){
        			$('.glass>i').removeClass('gl2').addClass('gl1');
        			$(this).removeClass('ip2').addClass('ip1');
        			$('.col').css('display','none');
        			$('.box-pc').css('display','none');
							var tag=$('<li></li>');
							var tag1=$('<a href="javascript:void(0);"></a>');
							tag.append(tag1);
        			var c=$(this).val();
        			tag1.html(c);
        			$('.s2').append(tag);        			
                    $(this).val('');
        		})
        		$('.pglass').click(function(){
        			$(this).siblings('.phsearch').css('display','flex');
        		})
        		$('.phsearch>input').focus(function(){
        			$(this).parent().siblings('.box-ph').css('display','flex');
        		})
        		$('.phsearch>input').blur(function(){
        			$(this).parent().siblings('.box-ph').css('display','none');
        			$(this).parent().css('display','none');
        			$(this).css('color','black');
        			var tag=$('<li></li>');
							var tag1=$('<a href="javascript:void(0);"></a>');
							tag.append(tag1);
        			var c=$(this).val();
        			tag1.html(c);
        			$('.phul').append(tag);        			
                    $(this).val('');
        		})
	
//         		$('.a1').click(function(){
//      			$(this).parent('.leftli2').siblings().children('.manlist').slideToggle('show');
//                     $(this).parent('.leftli2').toggleClass('leftli22');
//         			$(this).siblings('.manlist').slideToggle('show');
//                     $(this).children('.listup').children('.lup').toggleClass('uup');
// 	        		})
	        $('.a1').click(function(){
		$(this).siblings('.manlist').slideToggle('show');        			    			
 		$(this).parent('.leftli2').siblings().children('.manlist').slideUp('show');       			
              $(this).parent('.leftli2').toggleClass('leftli22');
              $(this).children('.listup').children('.lup').toggleClass('uup');                
              $(this).parent('.leftli2').siblings().removeClass('leftli22');       			
        		  $(this).parent().siblings().children('a').children('.listup').children('.lup').removeClass('uup');  	
	        		})
        		$('.a2').click(function(){
        			$(this).siblings('.list-group').slideToggle('show');
        			$(this).children('.listup').children('.lup1').toggleClass('ldown1');
        		})
        		$('.shut').click(function(){
                    $('.phlist').animate({'left':'-100%'},1000);
        		})
        		$('.btn').click(function(){
                    $('.phlist').animate({'left':'0%'},1000);
        		})
        		$('.phbg').click(function(){
                    $('.phlist').animate({'left':'-100%'},1000);
        		})
        		$(".fouro").hover(function(){
        			$(this).css('box-shadow','1px 2px 6px 0 rgba(163,163,163,0.5)');
        		},function(){
        			$(this).css('box-shadow','none');
        		})
        			$(".nul>li").hover(function(){
        			$(this).css('box-shadow','1px 2px 6px 0 rgba(163,163,163,0.5)');
        		},function(){
        			$(this).css('box-shadow','none');
        		})
        			$(".nul1>li").hover(function(){
        			$(this).css('box-shadow','1px 2px 6px 0 rgba(163,163,163,0.5)');
        		},function(){
        			$(this).css('box-shadow','none');
        		})
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
//      		 $('#left').click(function(event) {
//                  num--;
//                  if(num<0){
//                      num=5;
//                  }
//                  $('ul').css('left', -num*520+'px');
//                  $('ol li').eq(num).addClass('current');
//                  $('ol li').eq(num).siblings().removeClass('current');
//              });
                // 看后一张图片 
//              $('#right').click(function(event) {
//                  num++;
//                  if(num>5){
//                      num=0;
//                  }
//                  $('ul').css('left', -num*520+'px');
//                  $('ol li').eq(num).addClass('current');
//                  $('ol li').eq(num).siblings().removeClass('current');
//              });

                // 点击索引
                $('.hotsale>ol li').click(function(event) {
                    num=$(this).index();
                    $('.nul1').css('left', -num*50+'%');
                    $(this).addClass('current');
                    $(this).siblings().removeClass('current');
                });

//整体括号
})
