// When page loads
$(document).ready( function() {
	// Add color class to each li.div
	$("li div").each( function() {
		$(this).attr("class", "color");
	});
	
	//Select each div
	$("div.color").each( function() {
		// Get value from next input
		var color = $(this).next().attr("value");
		// Put inputs value as divs background color
		$(this).css("background-color", color);
	});
	
	// If hex code changes
	$("input").change(function () {
		// Get new value from input
		var newColor = $(this).val();
		// Change div's background-color to new value on input
		$(this).prev().css("background-color", newColor);
	})
	
	/*
	// Add rbg to each div
	$("div.color").each( function() {
		// Get colors rgb value
		var rbgColor = $(this).css("background-color");
		var parag = "<p></p>"
		$(parag).text(rbgColor);
		$(this).append(parag);
		
	});
	
	*/
	
		
	
	// Target _blank option for each anchor
	$("a").each( function() {
		$(this).attr({
			target: "blank",
			rel: "nofollow"
		});
	});
});



















