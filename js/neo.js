$(function(){        var num=0;
	 				var num1=0;
	                 var timer;
	                 var timer1;
	                function gogo2(){
                    clearInterval(timer)
                    timer=setInterval(function(){
                        num++;
                        if(num>2){
                            num=0;
                        }
                        // 让ul上移;
                        $('.yeevideo').css('top', -num*100+'%');
                    },1000)
                }
                gogo2();
                 function gogo3(){
                    clearInterval(timer1)
                    timer1=setInterval(function(){
                        num1++;
                        if(num1>1){
                            num1=0;
                        }
                        // 让ul上移;
                        $('.yeecloths ul').css('top', -num1*96+'%');
                    },1000)
                }
                gogo3();
})