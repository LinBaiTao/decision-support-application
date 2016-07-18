$(function(){
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
	$(".jc_handle").click(function(){
		$(this).parent().toggleClass("hide")
	})
	$(".card").click(function(){
		if($(this).attr("readonly")=="true"){
			$(this).addClass("active").siblings().removeClass("active")
		}else{
			$(this).toggleClass("active")
		}
	})
})
window.onload=window.onresize=function(){
	var ht1=$(".main_left").height()-$(".jc_card_box").height()-35
	$(".list_wrap").height(ht1)
	var ht2=$(".main_right").height()-$(".detail").height()-$(".jc_progress_wrap").height()-140;
	$(".ywb_time_wrap").height(ht2)
}
