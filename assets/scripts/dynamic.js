$( document ).ready(function() {
	$("<div class=\"container\"> </div>").appendTo("#content");
	$("<div class=\"background\"></div>").appendTo('.container');
	$("<div class=\"content_cont\"></div>").appendTo('.container');
	$("<div class=\"logo\">Burger Bar</div>").appendTo('.content_cont');
	$("<p class=\"byline\">From one burger lover to others: this is THE Best Burger it town. Try our double bypass - it's free if you can eat it below 2 minutes</p>").appendTo('.content_cont');
});