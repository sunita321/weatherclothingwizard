//add data to weather divs with data that is either locally stored zip code or user inputted zip code
//if statements for if input form has a value or is empty
//define variables for Sunita to target icon text e.g. clear, snow, etc.
//eventually adjust variable surrounding local storage to target Ruth's stored data

//wait until document loads to carry out javascript
$(document).ready(function() {
	//variable for dynamically created div to hold current weather conditions
	var currentHolder = $("<div class='panel' id='currentHolder'>");
	//variable for dynamically created div to hold weather forecast
	var forecastHolder = $("<div class='panel' id='forecastHolder'>");
	//eventually this needs to change to target Ruth's locally stored data...
	//***comment this out before combining code***
	var zipcode = 34711 //eventually change this to content of localZipcode var
	//***comment this out before combining code***
	storeZipcode = localStorage.setItem("zipcode", zipcode);
	//change this to zipcode for final app
	var localZipcode = localStorage.getItem("zipcode", storeZipcode);

	//grabbing zip code from user input field
	// var inputZipcode = $(".for").val();

 	//weather underground API key
	var apiKey = "3f8d0b47644220a7"
	//array containing both query options for API call
	var weatherRequest = ["conditions", "forecast"];
	//URL for current weather conditions API call from weatherunderground-----------------------------change to zipcode for final app
	var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + localZipcode + ".json";
	//URL for forecasted weather API call from weatherunderground--------------------------------------change to zipcode for final app
	var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + localZipcode + ".json";
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
	//testing purposes only, remove before going live, included in Mike's code
	var now = new Date();
	//testing purposes only, remove before going live, included in Mike's code
	var hours = now.getHours();
		
//functions defined, ajax calls made-----------------------------------------

	$("#weatherHolder").empty();

	function displayCurrent() {
		$("#displayCurrent").empty();

		$.ajax(currentRequest).done(function(currentResponse) {
		//console.log currentRequest var
		console.log(currentRequest);
		//console.log data response, objects from API
		console.log(currentResponse);

		var zip = localStorage.getItem("zipcode", storeZipcode);

		var temp = currentResponse.current_observation.temp_f;

		var feelsLike = currentResponse.current_observation.feelslike_f;

		var currentIcon = currentResponse.current_observation.icon_url;

		$(currentHolder).html("<h3>Current Conditions for " + zip + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + temp + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

		$("#weatherHolder").prepend(currentHolder);
		// $("body").append(weatherHolder);

		});
		
	};

		function displayForecast() {
			$("#displayForecast").empty();
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

				var forecast = forecastResponse.forecast.txt_forecast.forecastday[0].icon;
				console.log(forecast);

				var now = new Date();
				
				var hours = now.getHours();
				
				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;
				
				if (hours > 15) {
					
					forecast = forecastResponse.forecast.txt_forecast.forecastday[1].icon;
					
					// text = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext; 
				} 

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;


				

			$(forecastHolder).html("<h3>Forecast:</h3>" + "<b>" + dayTitle + "</b>" + dayIconImage + dayText + "<br>" + "<b>" + nightTitle + "</b>" + nightIconImage + nightText);

			$("#weatherHolder").append(forecastHolder);

			//uncomment for Sunita's functions to run.
			// wizardManBusiness();
			// wizardManCasual();
			// wizardWomanCasual();
			// wizardWomanBusiness();
			});

		};

$("#wizard-search").on("click", function() {
	$("#weatherHolder").empty();
	$("#currentHolder").html("");
	$("forecastHolder").html("");
	//grab user input for new zip code
	var inputZipcode = $("#zip-form").val();
	console.log(inputZipcode);
	//gif.data('stillImage', response.data[i].images.fixed_height_still.url);
	// $(currentHolder).data("inputZipcode", inputZipcode);
	// var dataZipcode = $(currentHolder).data("inputZipcode");
	// $(forecastHolder).data("inputZipcode", inputZipcode);

	// var currentURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + inputZipcode + ".json";

	function displayCurrentWithInput() {
			$("#displayCurrent").empty();
			//variable for user inputted zip code
			// var inputZipcode = $("#zip-form").val();
			
			// console.log(inputZipcode);

			if (inputZipcode != "" && inputZipcode != null && inputZipcode != undefined) {

				var currentURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + inputZipcode + ".json";

				//created variable for API data request to be made
				var currentRequestWithInput = {
					//url for reqest will === above var of urlQuery
					url: currentURLwithInput,
					//request method === GET
					method: "GET"
				};

				$.ajax(currentRequestWithInput).done(function(currentResponseWithInput) {
					//console.log currentRequestWithInput var
					console.log(currentRequestWithInput);
					//console.log data response, objects from API
					console.log(currentResponseWithInput);
					//zip code
					var zip = currentResponseWithInput.current_observation.display_location.zip;
					//current temp data
					var temp = currentResponseWithInput.current_observation.temp_f;
					//current feels like data
					var feelsLike = currentResponseWithInput.current_observation.feelslike_f;
					//current weather icon url data
					var currentIcon = currentResponseWithInput.current_observation.icon_url;

					$(currentHolder).html("<h3>Current Conditions for " + zip + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + temp + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");
					
					$("#weatherHolder").prepend(currentHolder);
					// $("body").append(weatherHolder);
				});
			} else {
				displayCurrent();
			}
		
	};

		function displayForecastWithInput() {
			$("#displayForecast").empty();
			//variable for user inputted zip code
			// var inputZipcode = $("#zip-form").val();
			// console.log(inputZipcode);
			
			if (inputZipcode != null && inputZipcode != "" && inputZipcode != undefined) {
				
				var forecastURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + inputZipcode + ".json";

				var forecastRequestWithInput = {
					//url for reqest will === above var of urlQuery
					url: forecastURLwithInput,
					//request method === GET
					method: "GET"
				};

		// 	// 	//request forecast data from WeatherUnderground API
				$.ajax(forecastRequestWithInput).done(function(forecastResponseWithInput) {
					//console.log forecastRequest var
					console.log(forecastRequestWithInput);
					//console.log data response, objects from API
					console.log(forecastResponseWithInput);

					var dayIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon_url;

					var dayIconImage = "<img src='" + dayIcon + "'>";

					var forecast = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon;

					var now = new Date();
					var hours = now.getHours();
					
					if (hours > 15) {
						forecast = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon; 
					}

					var nightIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon_url;

					var nightIconImage = "<img src='" + nightIcon + "'>";

					var dayTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].title;

					var nightTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].title;

					var dayText = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].fcttext;

					var nightText = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].fcttext;

					$(forecastHolder).html("<h3>Forecast:</h3><br>" + "<b>" + dayTitle + "</b>" + dayIconImage + dayText + "<br>" + "<b>" + nightTitle + "</b>" + nightIconImage + nightText);

					$("#weatherHolder").append(forecastHolder);

				});
			} else {
				displayForecast();
			}
		};

	displayCurrentWithInput();
	displayForecastWithInput();
	

// //Call functions---------------------------------------------

// 	$("#weatherHolder").empty();

// 	displayCurrent();

// 	displayForecast();

});

});






