$( document ).ready( function(){

	$("#topPanel").animate({"top":"-=150px"}, 2000 );
	$("#bottomPanel").animate({"bottom": "-=150px"}, 2000);

	//CHAIN
	// $("#topPanel").animate({"top":"-=150px"}, 2000 , function(){
	// 	$("#bottomPanel").animate({"bottom": "-=150px"}, 2000);
	// });

	

	$("img").click( function(){
		$(this).fadeOut();
		$(this).fadeIn();


		//chain

		
	});

});

