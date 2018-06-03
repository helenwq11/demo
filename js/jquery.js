$(document).ready(function(){
	var pics=$(".slide"),
	    prev=$("#prev"),
	    next=$("#next"),
	    len=pics.length,
	    index=0,
        timer=null;
        
/*tab区切换*/
	$(".i-department").click(function(){
		$(this).addClass("item_focus");
		$(".i-hospital").removeClass("item_focus");
		$(".tab1").hide();
		$(".tab2").show();
	});
	$(".i-hospital").click(function(){
		$(this).addClass("item_focus");
		$(".i-department").removeClass("item_focus");
		$(".tab2").hide();
		$(".tab1").show();
	});
	
/*绑定点击下一张事件*/
next.click(function(){
	index++;
	if(index>=len){
		index=0;
	}
	changeImg();/*调用切换函数*/
	});

/*绑定点击上一张事件*/
 prev.click(function(){
 	index--;
 	if(index<0){
 		index=len-1;
 	}
 	changeImg();
 });
 /*自动轮播*/
	timer=setInterval(function(){
		next.click();
	},2000);
	
	/*清除定时器*/
	$(".banner-slider").mouseenter(function(){
		clearInterval(timer);
	});
	
	/*鼠标离开时重新开始定时*/
	$(".banner-slider").mouseleave(function(){
		timer=setInterval(function(){
		next.click();
	},2000);
	});
	
	/*切换图片*/
	function changeImg(){
		pics.removeClass("slide-active");
		pics.eq(index).addClass("slide-active");
	};
});
