$( document ).ready( function(){

	$(function(){
	   $("button").click(function(){
	       $("#funnyBunny").fadeIn("hidden");
	   });
	});

	$( "li" ).hover(
  function() {
    $( this ).append( $() );
  }, function() {
    $( this ).find( "span:last" ).remove();
  	});
 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
	});

$("h1").click(function(){
        alert("Thanks for clicking");
    });
});





