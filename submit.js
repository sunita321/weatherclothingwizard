$(document).ready(function()
{
	//variable for dynamically created div to hold current weather conditions
	var currentHolder = $("<div class='panel' id='currentHolder'>");
	//variable for dynamically created div to hold weather forecast
	var forecastHolder = $("<div class='panel' id='forecastHolder'>");
	//variable for zipcode data from local storage
	var localZipcode = localStorage.getItem("zipcode");
 	//weather underground API key
	var apiKey = "3f8d0b47644220a7"
	//array containing both query options for API call
	var weatherRequest = ["conditions", "forecast"];
	//URL for current weather conditions API call from weatherunderground
	var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + localZipcode + ".json";
	//URL for forecasted weather API call from weatherunderground
	var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + localZipcode + ".json";
	//variable for API current weather data request
	var currentRequest = {
		
		url: currentURL,

		method: "GET"
	};
	//variable for API forecasted weather data request
	var forecastRequest = {
		
		url: forecastURL,

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
		// console.log(currentRequest);
		//console.log data response, objects from API
		// console.log(currentResponse);

		// var zip = localStorage.getItem("zipcode");

		var tempData = currentResponse.current_observation.temp_f;
		console.log(tempData)

		var feelsLike = currentResponse.current_observation.feelslike_f;

		var currentIcon = currentResponse.current_observation.icon_url;

		$(currentHolder).html("<h3>Current Conditions for " + localZipcode + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

		$("#weatherHolder").prepend(currentHolder);
		
		$("#currentHolder").data("temp", tempData);
		var temp = $("#currentHolder").data("temp");
		console.log(temp);
		

		});
		
	};

		function displayForecast() {
			$("#displayForecast").empty();
			//request forecast data from WeatherUnderground API
			$.ajax(forecastRequest).done(function(forecastResponse) {
				// console.log(forecastRequest);
				// console.log(forecastResponse);

			//define variables for ajax call-----------------------

				var dayIcon = forecastResponse.forecast.txt_forecast.forecastday[0].icon_url;

				var dayIconImage = "<img src='" + dayIcon + "'>";

				var nightIcon = forecastResponse.forecast.txt_forecast.forecastday[1].icon_url;

				var nightIconImage = "<img src='" + nightIcon + "'>";

				var forecastData = forecastResponse.forecast.txt_forecast.forecastday[0].icon;
				console.log(forecastData);
				
				var now = new Date();
				
				var hours = now.getHours();
				
				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;
				
				if (hours > 15) {	
					forecastData = forecastResponse.forecast.txt_forecast.forecastday[1].icon;
					console.log(forecastData)
				} 

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;

			//add gathered data to divs-----------------------
			$(forecastHolder).html("<h3>Forecast:</h3>" + "<b>" + dayTitle + "</b>" + dayIconImage + dayText + "<br>" + "<b>" + nightTitle + "</b>" + nightIconImage + nightText);
			
			$("#weatherHolder").append(forecastHolder);
			
			$("#forecastHolder").data("forecast", forecastData);
			
			var forecast = $("#forecastHolder").data("forecast");
			console.log(forecast);
			});

		};
	
	$("#wizard-search").on("click", function()
	{
		

		var occasion = $('#occasion-input').val();
		console.log(occasion);

		var zipcode = $('#zip-form').val();
		console.log(zipcode);

		$("#weatherHolder").empty();
		$("#currentHolder").html("");
		$("forecastHolder").html("");
		//grab user input for new zip code
		var inputZipcode = $("#zip-form").val();
		console.log(inputZipcode);
		
		function displayCurrentWithInput() 
		{
			$("#displayCurrent").empty();

			if (inputZipcode != "" && inputZipcode != null && inputZipcode != undefined) 
			{

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
					var tempData = currentResponseWithInput.current_observation.temp_f;
				
					console.log(tempData)
					

					// console.log(forecast);
					//current feels like data
					var feelsLike = currentResponseWithInput.current_observation.feelslike_f;
					//current weather icon url data
					var currentIcon = currentResponseWithInput.current_observation.icon_url;

					$(currentHolder).html("<h3>Current Conditions for " + zip + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");
					
					$("#weatherHolder").prepend(currentHolder);
					$("#currentHolder").data("temp", tempData);
					var temp = $("#currentHolder").data("temp");
					console.log(temp);
					// $("body").append(weatherHolder);
				});
			} else {
				displayCurrent();
			}

			//Clothing functions.
			// wizardManBusiness();
			// wizardManCasual();
			// wizardWomanCasual();
			// wizardWomanBusiness();
		
		};

		function displayForecastWithInput() 
		{
			$("#displayForecast").empty();
			//variable for user inputted zip code
			// var inputZipcode = $("#zip-form").val();
			// console.log(inputZipcode);
			
			if (inputZipcode != null && inputZipcode != "" && inputZipcode != undefined)
			{
				
				var forecastURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + inputZipcode + ".json";

				var forecastRequestWithInput = 
				{
					url: forecastURLwithInput,
					
					method: "GET"
				};

				//request forecast data from WeatherUnderground API
				$.ajax(forecastRequestWithInput).done(function(forecastResponseWithInput)
				{
					// console.log(forecastRequestWithInput);
					// console.log(forecastResponseWithInput);

					var dayIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon_url;

					var dayIconImage = "<img src='" + dayIcon + "'>";

					var forecastData = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon;
					console.log(forecastData);

					var now = new Date();

					var hours = now.getHours();
					
					if (hours > 15)
					{
						forecastData = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon;
						console.log(forecastData);
					}

					var nightIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon_url;

					var nightIconImage = "<img src='" + nightIcon + "'>";

					var dayTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].title;

					var nightTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].title;

					var dayText = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].fcttext;

					var nightText = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].fcttext;

					$(forecastHolder).html("<h3>Forecast:</h3><br>" + "<b>" + dayTitle + "</b>" + dayIconImage + dayText + "<br>" + "<b>" + nightTitle + "</b>" + nightIconImage + nightText);

					$("#weatherHolder").append(forecastHolder);
					$("#forecastHolder").data("forecast", forecastData);
					var forecast = $("#forecastHolder").data("forecast");
					console.log(forecast);

				});
			
			} else 
			{
				displayForecast();
			}

			//clothing functions
			// wizardManBusiness();
			// wizardManCasual();
			// wizardWomanCasual();
			// wizardWomanBusiness();
		
		};

	displayCurrentWithInput();
	displayForecastWithInput();

		return false;
	});

});



