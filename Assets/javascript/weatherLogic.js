$(document).ready(function()
{
	localStorage.setItem("zipcode", 32901)
	
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
	var currentRequest =
	{
		
		url: currentURL,

		method: "GET"
	};
	//variable for API forecasted weather data request
	var forecastRequest =
	{
		
		url: forecastURL,

		method: "GET"
	};

	//variable for date and time
	var now = new Date();

	//variable for hours extracted from date and time
	var hours = now.getHours();
		
//functions defined, ajax calls made-----------------------------------------

	$("#weatherHolder").empty();

	function displayCurrent()
	{
		$("#displayCurrent").empty();
		//request current weather data from WeatherUnderground API
		$.ajax(currentRequest).done(function(currentResponse) 
		{
			//define variables for returned data-------------------

			var tempData = currentResponse.current_observation.temp_f;

			var feelsLike = currentResponse.current_observation.feelslike_f;

			var currentIcon = currentResponse.current_observation.icon_url;

			//add gathered data to divs---------------

			$(currentHolder).html("<h3>Current Conditions for " + localZipcode + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

			$("#weatherHolder").prepend(currentHolder);
			//add current temp to currentHolder div as data 
			$("#currentHolder").data("temp", tempData);
			//create variable for temp data from div
			var temp = $("#currentHolder").data("temp");
			console.log(temp);
		
		});
		
	};

	function displayForecast()
	{
		$("#displayForecast").empty();
		//request forecast data from WeatherUnderground API
		$.ajax(forecastRequest).done(function(forecastResponse)
		{
			//define variables for returned data-------------------

			var dayIcon = forecastResponse.forecast.txt_forecast.forecastday[0].icon_url;

			var dayIconImage = "<img src='" + dayIcon + "'>";

			var nightIcon = forecastResponse.forecast.txt_forecast.forecastday[1].icon_url;

			var nightIconImage = "<img src='" + nightIcon + "'>";

			var forecastData = forecastResponse.forecast.txt_forecast.forecastday[0].icon;
			
			//condition for forecastData variable based on time of day
			if (hours > 15)
			{	
				forecastData = forecastResponse.forecast.txt_forecast.forecastday[1].icon;
			}

			var now = new Date();
			
			var hours = now.getHours();
			
			var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

			var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext; 

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
	
//on click event for user input------------------

	$("#wizard-search").on("click", function()
	{
		//empty weather and clothing divs before adding data to them
		$("#weatherHolder").empty();
		$("#displayClothing").empty();

		//define variables for on click event ----------------------

		var occasion = $('#occasion-input').val();
		console.log(occasion);

		var zipcode = $('#zip-form').val();
		console.log(zipcode);

		var inputZipcode = $("#zip-form").val();
		
		//define functions needed within on click event--------------------

		function displayCurrentWithInput() 
		{
			$("#displayCurrent").empty();

			//run code as long as input field is not blank
			if (inputZipcode != "" && inputZipcode != null && inputZipcode != undefined) 
			{

				var currentURLwithInput = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + inputZipcode + ".json";

				//created variable for API data request to be made
				var currentRequestWithInput =
				{
					url: currentURLwithInput,

					method: "GET"
				};

				$.ajax(currentRequestWithInput).done(function(currentResponseWithInput)
				{
					
					//define variables for returned data-------------------
					
					var tempData = currentResponseWithInput.current_observation.temp_f;
					console.log(tempData)
					
					var feelsLike = currentResponseWithInput.current_observation.feelslike_f;
					
					var currentIcon = currentResponseWithInput.current_observation.icon_url;

					//add gathered data to divs-----------------------

					$(currentHolder).html("<h3>Current Conditions for " + inputZipcode + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");
					
					$("#weatherHolder").prepend(currentHolder);

					$("#currentHolder").data("temp", tempData);

					var temp = $("#currentHolder").data("temp");
					console.log(temp);
					// $("body").append(weatherHolder);
				});

			} else 
			{
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

			//run code as long as input field is not blank
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

					//define variables for returned data-------------------

					var dayIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon_url;

					var dayIconImage = "<img src='" + dayIcon + "'>";

					var forecastData = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].icon;

					//condition for forecastData variable based on time of day
					if (hours > 15)
					{
						forecastData = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon;
					}

					var now = new Date();

					var hours = now.getHours();

					var nightIcon = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].icon_url;

					var nightIconImage = "<img src='" + nightIcon + "'>";

					var dayTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].title;

					var nightTitle = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].title;

					var dayText = forecastResponseWithInput.forecast.txt_forecast.forecastday[0].fcttext;

					var nightText = forecastResponseWithInput.forecast.txt_forecast.forecastday[1].fcttext;

					//add gathered data to divs-----------------------

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