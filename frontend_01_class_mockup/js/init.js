jQuery(function($){
	var bgColor=['#0288D1','#0097A7','#00796B','#0091EA','#2E7D32', '#558B2F'];
	var member=new Array(['박다빈,윤지혜,주아영'],['박준용,서은혜,주홍경'],['범단비,이다윤,서윤화'],['김은정,남윤정,이지희'],['선정희,이수진,조소영'],['강소희,남선정,정지수']);

	var rN=Math.floor(Math.random()*6);
	$('body').css({backgroundColor:bgColor[0]});

	$('.thumbs a').append('<span class="members"></span>')

	$('.thumbs a .members').each(function(i){
		$(this).text(member[i])
	})
	
	$('.thumbs a').on({
		mouseover:function(){
			$('.members',this).stop().animate({top:-120},250)
		},
		mouseout:function(){
			$('.members',this).stop().animate({top:0},250)
		}
	})

})