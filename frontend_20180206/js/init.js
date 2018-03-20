jQuery(function($){
	$('.mockup a').on('click',function(e){
		e.preventDefault();
		thisURL=$(this).attr('href');
		window.open(thisURL,'','width=380,height=700,left=300,top=10')
	})
	
});