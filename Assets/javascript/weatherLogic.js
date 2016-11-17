//possibly add class or id later to differentiate tops, bottoms, accessories.
//following code from NYTSearch activity 6.3... not yet edited for weatherclothingwizard

//start dumping to HTML
var resultSection = $("<div>");
resultSection.addClass("well");
resultSection.attr("id", "resultSection-" + i);
$("#largeResultsDiv").append(resultSection);

//Attach content to appropriate well/div
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);

//empty div before adding html content
$("#largeResultsDiv").empty();

//-----------------above this line has not fully been changed yet for weatherclothingwizard

//following example is from Giftastic homework, edited for weatherclothingwizard
//id of navbar submit button?

	$(".btn").on("click", function() {
			//grabbing zip code from user input field
		 	var zipcode = $(".form-control").val();
		 	//console.log the zipcode var data
		 	console.log(zipcode);

			
			var apiKey = "3f8d0b47644220a7"

			var weatherRequest = ["conditions", "forecast"];

			//Giphy API url plus specific queries requested, including dessert name from array
			var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "q/" + zipcode + ".json";

			var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "q/" + zipcode + ".json";
			//created variable for API data request to be made
			var currentRequest = {
				//url for reqest will === above var of urlQuery
				url: currentURL,
				//request method === GET
				method: "GET"
			};

			var forecastRequest = {
				//url for reqest will === above var of urlQuery
				url: forecastURL,
				//request method === GET
				method: "GET"
			};

//---------------------above this line has been edited specifically for weatherclothingwizard
//---------------------below this line is leftover from homework example

			//request data from the Giphy API
			$.ajax(request).done(function(response) {
				//console.log data response, objects from API
				console.log(response);