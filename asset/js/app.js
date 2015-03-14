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
	// Target _blank option for each anchor
	$("a").each( function() {
		$(this).attr("target", "blank");
	});
});



















