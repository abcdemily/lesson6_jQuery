//include this library the head of your html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>

// a selector
$("body") 

//makes sure your code doesn't run until your document is fully ready
$(document) .ready() 


// anonymous function
function()
	{
		alert("anonymous funtion");

	}

// anonymous functions can be stored in variables
var my_anon_func = function()
	{ 
		alert("Hello World!");
	}

// callbacks
// Define an anonymous function called someOtherFunction
var someOtherFunction = function()
	{ 
		alert('hello world'); 
	}

// Declare a regular or anonymous function that takes another
// function as an argument, does something,
// then runs that other function 

function someRunner(anyFunction)
	{ 
		console.log(2+2); anyFunction();
	}

// Call the regular function, supplying the initial 
// anonymous function as an argument

someRunner(someOtherFunction);

// show and hide an element
$("body").hide();
$("body").show();

// fade in fade out
$("#section-one").fadeOut();
$("#section-one").fadeIn();


// adding time
$("#section-one").fadeOut(1000);
//Fade out over 1 second

$("#section-one").fadeIn(4000);
//Fade in over 4 seconds

// sliding
$("#section-one").slideUp(1000);
//Fade out over 1 second

$("#section-one").slideDown(4000);
//Fade in over 4 seconds

//animate CSS
$(".my-element").animate( {   opacity: 0.25,   width: 70% } , 2000 );

// click events
$("ul li a").click(
	function()
		{
			alert('imclicked!');
		} );

//animation triggering another animation
var animateMenu = function()
	{
		$(".menu").animate( {opacity: .5} )
	}
		$(".menu").show(animateMenu)

// simplified
$(".menu").show( function()
	{   
		$(".menu").animate( {opacity: .5} ) 
	})