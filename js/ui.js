//ui-search定义
 $.fn.UiSearch = function(){
	var ui = $(this);
    $('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();
		return false;
	});

	$('.ui-search-select-list a',ui).on('click',function(){
        $('.ui-search-selected').text( $(this).text() );
		$('.ui-search-select-list').hide();
        return false;
	});

	$('body').on('click',function(){
		$('.ui-search-select-list').hide();
	})
}
//ui-backTop返回顶部
$.fn.UiBackTop = function(){
	var ui = $(this);
	var el = $('<a class="ui-backTop" href="#0"></a>');
	ui.append( el );
    var windowHeight = $(window).height();

	$(window).on('scroll',function(){
		var top = $('body').scrollTop();
		if(top > windowHeight){
			el.show();
		}else{
			el.hide();
		}
	});
	el.on('click',function(){
		$(window).scrollTop(0);
	});
	}


/*页面的脚本逻辑*/
$(function(){
	$('.ui-search').UiSearch();
	$('body').UiBackTop();
});
