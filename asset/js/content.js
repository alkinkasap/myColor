$(function () {
	// Grab the template script
	var theTemplateScript = $("#example-template").html();

	// Compile the template
	var theTemplate = Handlebars.compile(theTemplateScript);

	// Define our data object
	var context={
		"set": [
			{
				"colorLink": "http://www.blazrobar.com/2013/free-psd-website-templates/foto-stylish-flat-psd-website-template/",
				"colorTitle": "Foto Psd Site",
				"colorHex": ["e9a904", "666666"]
			},{
				"colorLink": "https://dribbble.com/shots/1970056-What-If-We-Could-Rethink-Digital-Healthcare",
				"colorTitle": "Healthy SSShit",
				"colorHex": ["fefefe", "d6d6d6", "565857", "56B9EE"]
			},{
				"colorLink": "https://design.ubuntu.com/brand/colour-palette",
				"colorTitle": "Ubuntu Rocks",
				"colorHex": ["772953", "5E2750", "AEA79F", "333333", "DD4814", "E05A2B"]
			},{
				"colorLink": "https://dribbble.com/shots/1965187-New-Personal-Site",
				"colorTitle": "3 Color w/ Orange",
				"colorHex": ["EB5E28", "E3E1D5", "343939"]
			},{
				"colorLink": "https://dribbble.com/shots/1973806-Pixvar-Brand-Guidelines",
				"colorTitle": "Pixvar Pink",
				"colorHex": ["0F2C31", "E94962", "9C8B8F"]
			},{
				"colorLink": "http://designmodo.github.io/Flat-UI/",
				"colorTitle": "Best of Flat-UI",
				"colorHex": ["2c3e50", "bdc3c7", "d35400", "c0392b", "8e44ad", "2980b9"]
			},{
				"colorLink": "https://dribbble.com/shots/1697905-Blog-and-form",
				"colorTitle": "BlognForm",
				"colorHex": ["F8F8F8", "575757", "C6B2B7", "B26357", "BB8479"]
			},{
				"colorLink": "https://dribbble.com/shots/2012807-Parallelogram",
				"colorTitle": "Parallelogram",
				"colorHex": ["1C28FD", "FAFB54", "695EE0", "7E809B"]
			},{
				"colorLink": "https://dribbble.com/shots/1669628-Newsletter-Templates-logo-concept-WIP",
				"colorTitle": "TheNewsletterTemplate",
				"colorHex": ["2F1915", "F05945", "8ACEC8", "F3EFE5"]
			},{
				"colorLink": "https://dribbble.com/shots/2359190-Dribbble-Invite-illustrations",
				"colorTitle": "Sweet Colors",
				"colorHex": ["E34C86", "478BEF", "4A45AB"]
			},{
				"colorLink": "http://www.colourlovers.com/palette/3961939/deep_fried_frog_legs",
				"colorTitle": "Deep Fried Frog Legs",
				"colorHex": ["AB6948", "8AA836", "B5BD44", "59B37B", "436F91"]
			}
		],
	};

	// Pass our data to the template
	var theCompiledHtml = theTemplate(context);

	// Add the compiled html to the page
	$(document.body).append(theCompiledHtml);
});