$( document ).ready(function() {
	$("<div class=\"container\"> </div>").appendTo("#content");
	$("<div class=\"background\"></div>").appendTo('.container');
	$("<div class=\"content_cont\"></div>").appendTo('.container');
	$("<div class=\"logo\">Burger Bar</div>").appendTo('.content_cont');
	$("<div class=\"column_30 left\"></div>").appendTo('.content_cont');
	$("<ul></ul>").appendTo(".column_30");
	$("<li>About</li>").appendTo("ul");
	$("<li>Menu</li>").appendTo("ul");
	$("<li>Address</li>").appendTo("ul");
	$("<div class=\"column_60 left\"></div>").appendTo('.content_cont');
	$("<h3></h3>").appendTo(".column_60");
	$("<p></p>").appendTo(".column_60");

	$("li").on("click", function(event){
		//console.log( event );
		switch(event.currentTarget.innerHTML){
			case "About":
				console.log("About");
				$(".column_60 h3").html("About Us");
				$(".column_60 p").show();
				$(".column_60 p").html("The idea behind Burger Bar started with two guys who love really good, high-quality burgers.\
					With that in mind, we serve the finest, chef-crafted burgers, salads, appetizers and sides made from local, fresh, all-natural ingredients.  We do this by serving burgers made from Colorado beef, never treated with hormones or antibiotics, and we source as much of our produce as possible from local and regional farms. We are so committed to freshness that we don’t even have a freezer in our kitchen!\
					We make many of the toppings for our burgers in-house, from our homemade American cheese, all of our sauces and ketchup, to our house-made buns baked fresh daily by our own baker. You can’t beat the quality and flavors of our food.\
					In the mood for a beer? We offer 12 craft beers on tap daily. Does a cocktail or Shaketini, one of our signature adult milkshakes, suit you better? Stop by our bar to watch a game or kick back with friends. And when the weather is warm, catch some sun on our patio.\
					We look forward to seeing you soon!");
				$("table").hide();
				break;
			case "Menu":
				console.log("Menu");
				$(".column_60 h3").html("Burgers which will break your heart..literaly");
				$(".column_60 p").hide();
				$("<table><tr><th>Item</th><th>cal</th><th>Price</th></tr><tr><td>THE big fat greek burger</td><td>1250</td><td>$13,95</td></tr><tr><td>The Vail Valley</td><td>980</td><td>$9,50</td></tr><tr><td>The Boss Hog</td><td>1020</td><td>$10,50</td></tr><tr><td>The ‘I Can’t Decide’</td><td>1570</td><td>$12,95</td></tr><tr><td>The DurangO</td><td>1147</td><td>$10,95</td></tr><tr><td>The 5280 Prime</td><td>1310</td><td>$14,95</td></tr></table>").appendTo(".column_60 h3");
				break;
			case "Address":
				console.log("Address");
				$(".column_60 h3").html("The same place Nemo was found...");
				$(".column_60 p").hide();
				$("table").hide();
				$("<iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/l8vZHdKzesg\" frameborder=\"0\" allowfullscreen></iframe>").appendTo(".column_60 h3");
				break;
		};
	});
});