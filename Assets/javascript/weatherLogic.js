//define variables for Sunita to target icon text e.g. clear, snow, etc.
//eventually adjust variable surrounding local storage to target Ruth's stored data

//wait until document loads to carry out javascript
$(document).ready(function() {

	// var weatherHolder = $("div").attr("id", "weatherHolder");

	var currentHolder = $("<div class='panel' id='currentHolder'>");

	var forecastHolder = $("<div class='panel' id='forecastHolder'>");

	//eventually this needs to change to target Ruth's input field/locally stored data...
	//comment this out before combining code
	var zipcode = 34711
	//comment this out before combining code
	var storeZipcode = localStorage.setItem("zipcode", zipcode);

	var localZipcode = localStorage.getItem("zipcode", storeZipcode);

	//grabbing zip code from user input field
	var inputZipcode = $(".btn").val();

 	//console.log the zipcode var data
 	console.log(zipcode);

	var apiKey = "3f8d0b47644220a7"

	var weatherRequest = ["conditions", "forecast"];

	//Giphy API url plus specific queries requested, including dessert name from array
	var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + localZipcode + ".json";

	console.log(currentURL);

	var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + localZipcode + ".json";
	
	console.log(forecastURL);

	//Giphy API url plus specific queries requested, including dessert name from array
	var currentURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + inputZipcode + ".json";

	console.log(currentURL);

	var forecastURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + inputZipcode + ".json";
	
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

	//created variable for API data request to be made
	var currentRequestWithInput = {
		//url for reqest will === above var of urlQuery
		url: currentURLwithInput,
		//request method === GET
		method: "GET"
	};

	var forecastRequestWithInput = {
		//url for reqest will === above var of urlQuery
		url: forecastURLwithInput,
		//request method === GET
		method: "GET"
	};

	$("#weatherHolder").empty();

	function displayCurrent() {

		$.ajax(currentRequest).done(function(currentResponse) {
		//console.log currentRequest var
		console.log(currentRequest);
		//console.log data response, objects from API
		console.log(currentResponse);

		var temp = currentResponse.current_observation.temp_f;

		var feelsLike = currentResponse.current_observation.feelslike_f;

		var currentIcon = currentResponse.current_observation.icon_url;

		$(currentHolder).append("<h3>Current Conditions:</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + temp + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

		$("#weatherHolder").prepend(currentHolder);
		// $("body").append(weatherHolder);

		});
		
	};

		function displayForecast() {

			//request forecast data from WeatherUnderground API
			$.ajax(forecastRequest).done(function(forecastResponse) {
				//console.log forecastRequest var
				console.log(forecastRequest);
				//console.log data response, objects from API
				console.log(forecastResponse);

				var dayIcon = forecastResponse.forecast.txt_forecast.forecastday[0].icon_url;

				var dayIconImage = "<img src='" + dayIcon + "'>";

				var iconWordDay = forecastResponse.forecast.txt_forecast.forecastday[0].icon;

				var nightIcon = forecastResponse.forecast.txt_forecast.forecastday[1].icon_url;

				var nightIconImage = "<img src='" + nightIcon + "'>";

				var iconWordNight = forecastResponse.forecast.txt_forecast.forecastday[1].icon;

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;

				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;

			$(forecastHolder).append(dayTitle + dayIconImage + dayText + "<br>" + nightTitle + nightIconImage + nightText);

			$("#weatherHolder").append(forecastHolder);

			// $("body").append(weatherHolder);

			});

		};

		function displayCurrentWithInput() {

		$.ajax(currentRequestWithInput).done(function(currentResponse) {
		//console.log currentRequest var
		console.log(currentRequest);
		//console.log data response, objects from API
		console.log(currentResponseWithInput);

		var temp = currentResponse.current_observation.temp_f;

		var feelsLike = currentResponse.current_observation.feelslike_f;

		var currentIcon = currentResponse.current_observation.icon_url;

		$(currentHolder).append("<h3>Current Conditions:</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + temp + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

		$("#weatherHolder").prepend(currentHolder);
		// $("body").append(weatherHolder);

		});
		
	};

		function displayForecastWithInput() {

			//request forecast data from WeatherUnderground API
			$.ajax(forecastRequestWithInput).done(function(forecastResponse) {
				//console.log forecastRequest var
				console.log(forecastRequest);
				//console.log data response, objects from API
				console.log(forecastResponseWithInput);

				var dayIcon = forecastResponse.forecast.txt_forecast.forecastday[0].icon_url;

				var dayIconImage = "<img src='" + dayIcon + "'>";

				var iconWord = "";

				var nightIcon = forecastResponse.forecast.txt_forecast.forecastday[1].icon_url;

				var nightIconImage = "<img src='" + nightIcon + "'>";

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;

				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;

			$(forecastHolder).append(dayTitle + dayIconImage + dayText + "<br>" + nightTitle + nightIconImage + nightText);

			$("#weatherHolder").append(forecastHolder);

			// $("body").append(weatherHolder);

			});

		};


	//submit button on click event
	$(".btn").on("click", function() {
		console.log(inputZipcode);

		// if (inputZipcode === "") {
		// 	//console.log the zipcode var data
		//  	console.log(inputZipcode);

		//  	$("#weatherHolder").empty();

		// 	// $("#weatherHolder").css({"border-color": "black", "border-width": "2px", "height": "500px", "background-color": "blue", "color": "white"})

		// 	displayCurrent();		

		// 	displayForecast();
		// } else {
		// 	//run different functions and API calls based on user input rather than local storage
		// 	// inputZipcode

		// 	//console.log the zipcode var data
		//  	console.log(inputZipcode);

		//  	$("#weatherHolder").empty();

		// 	// $("#weatherHolder").css({"border-color": "black", "border-width": "2px", "height": "500px", "background-color": "blue", "color": "white"})

		// 	displayCurrentWithInput();		

		// 	displayForecastWithInput();
		// }
		
	});

	//Call functions
	displayCurrent();

	displayForecast();

});




