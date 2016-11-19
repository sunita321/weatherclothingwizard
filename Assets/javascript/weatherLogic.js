//possibly add class or id later to differentiate tops, bottoms, accessories.
//following code from NYTSearch activity 6.3... not yet edited for weatherclothingwizard

//start dumping to HTML
// var resultSection = $("<div>");
// resultSection.addClass("well");
// resultSection.attr("id", "resultSection-" + i);
// $("#largeResultsDiv").append(resultSection);

// //Attach content to appropriate well/div
// $("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
// $("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
// $("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);

// //empty div before adding html content
// $("#largeResultsDiv").empty();

//-----------------above this line has not fully been changed yet for weatherclothingwizard

//following example is from Giftastic homework, edited for weatherclothingwizard
//id of navbar submit button?
$(document).ready(function() {

			// var weatherHolder = $("div").attr("id", "weatherHolder");

			var currentHolder = $("div").attr("id", "currentHolder");

			var forecastHolder = $("div").attr("id", "forecastHolder");

			var zipcode = 34711

			var storeZipcode = localStorage.setItem("zipcode", zipcode);

			var localZipcode = localStorage.getItem("zipcode", zipcode);

		 	//console.log the zipcode var data
		 	console.log(zipcode);

			var apiKey = "3f8d0b47644220a7"

			var weatherRequest = ["conditions", "forecast"];

			//Giphy API url plus specific queries requested, including dessert name from array
			var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + localZipcode + ".json";

			console.log(currentURL);

			var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + localZipcode + ".json";
			
			console.log(forecastURL);

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

			$("#weatherHolder").empty();

			$.ajax(currentRequest).done(function(currentResponse) {
				//console.log currentRequest var
				console.log(currentRequest);
				//console.log data response, objects from API
				console.log(currentResponse);

				var temp = currentResponse.current_observation.temp_f;

				var feelsLike = currentResponse.current_observation.feelslike_f;

				var currentIcon = currentResponse.current_observation.icon_url;
			
				function displayCurrent() {
					$(currentHolder).append("<h3>Current Conditions:</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + temp + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

					$("#weatherHolder").append(currentHolder);

					// $("body").append(weatherHolder);
				};
				
				displayCurrent();
				

			});

			//request forecast data from WeatherUnderground API
			$.ajax(forecastRequest).done(function(forecastResponse) {
				//console.log forecastRequest var
				console.log(forecastRequest);
				//console.log data response, objects from API
				console.log(forecastResponse);

				var dayIcon = forecastResponse.forecast.txt_forecast.forecastday[0].icon_url;

				var dayIconImage = "<img src='" + dayIcon + "'>";

				var nightIcon = forecastResponse.forecast.txt_forecast.forecastday[1].icon_url;

				var nightIconImage = "<img src='" + nightIcon + "'>";

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;

				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;

				function displayForecast() {
					$(forecastHolder).append(dayTitle + dayIconImage + dayText + "<br>" + nightTitle + nightIconImage + nightText);

					$("#weatherHolder").append(forecastHolder);

					// $("body").append(weatherHolder);
				};

				displayForecast();
				

			});




			$(".btn").on("click", function() {
				//grabbing zip code from user input field
				var zipcode = $(".form-control").val();
			 	//console.log the zipcode var data
			 	console.log(zipcode);

			 	$("#weatherHolder").empty();

				$("#weatherHolder").css({"border-color": "black", "border-width": "2px", "height": "500px", "background-color": "blue", "color": "white"})

				displayCurrent();		

				displayForecast();

			});
});



