//var temp;
//var forecast;
//var occasion;
//var gender;

$(document).ready(function()
<<<<<<< HEAD
{
=======

{	
	// -----------------------------------------------
		// jquery for the greeting 
		var now = new Date();
		var hours = now.getHours();
		var msg;
		

		var storedName = localStorage.getItem("name");

		//Capitalize first letter in string

		String.prototype.capitalize = function() 
		{
			return this.charAt(0).toUpperCase() + this.slice(1);
		};

		if (hours < 12) msg = "Good Morning ";
		else if (hours < 18) msg = "Good Afternoon ";
		else msg = "Good Evening " + name;
		$('#time').html(msg + storedName.capitalize() + "!");


	//localStorage.getItem("gender", "female")

	localStorage.getItem("zipcode")

	gender = localStorage.getItem("gender");
	console.log(gender);

	console.log("Starting temp " + temp);
	
	console.log("Starting forecast " + forecast);
>>>>>>> master
	
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
<<<<<<< HEAD

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
=======

			var feelsLike = currentResponse.current_observation.feelslike_f;

			var currentIcon = currentResponse.current_observation.icon_url;

			//add gathered data to divs---------------

			$(currentHolder).html("<h3>Current Conditions for " + localZipcode + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

			$("#weatherHolder").prepend(currentHolder);
			//add current temp to currentHolder div as data 
			$("#currentHolder").data("temp", tempData);
			//create variable for temp data from div
			temp = $("#currentHolder").data("temp");
			console.log(temp);

			clothesFunction();
>>>>>>> master
		
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
			
<<<<<<< HEAD
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
=======
			forecast = $("#forecastHolder").data("forecast");
			console.log("ending forecast1 " + forecast);

			clothesFunction();
		});

	};

	function clothesFunction()
	{

		// This is our API Key
    var ShopStyleAPIKey = "uid7169-36888263-28";
    var clothingImage_top = "";
    var clothingImage_bottom = "";
    var clothingImage_jacket = "";
    var umberellaImage = "";


    //***********Women Clothes****************

    function displayWomenJackets()
    {
      $(".clothing_jackets").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+jackets&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_jackets').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_jacket = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_jacket);
          clothingImage_jacket = $("<img>").attr("src", clothingImage_jacket); //Passes still image link to the image src
          $(".clothing_jackets").append(clothingImage_jacket);
        }

    
      }); 

    }

    function displayWomenCoats()
    {
      $(".clothing_jackets").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+coat&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_jackets').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_jacket = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_jacket);
          clothingImage_jacket = $("<img>").attr("src", clothingImage_jacket); //Passes still image link to the image src
          $(".clothing_jackets").append(clothingImage_jacket);
        }

    
      }); 

    }

    function displayWomenSnow()
    {
      $(".umbrella").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+snow+boots&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_umbrella').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          umberellaImage = response.products[i].image.sizes.IPhone.url;
          console.log(umberellaImage);
          umberellaImage = $("<img>").attr("src", umberellaImage); //Passes still image link to the image src
          $(".umbrella").append(umberellaImage);

          

        }

    
      }); 

    }

    function displayWomenBusinessTops()
    {
      $(".clothing_tops").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+business+blouse&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_tops').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_top = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_top);
          clothingImage_top = $("<img>").attr("src", clothingImage_top); //Passes still image link to the image src
          $(".clothing_tops").append(clothingImage_top);
        }

    
      }); 

    }

    function displayWomenBusinessBottoms()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+dress-pants&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

    function displayWomenCasualTops()
    {
      $(".clothing_tops").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=womens-tops&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_tops').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_top = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_top);
          clothingImage_top = $("<img>").attr("src", clothingImage_top); //Passes still image link to the image src
          $(".clothing_tops").append(clothingImage_top);
        }

    
      }); 

    }

    function displayWomenCasualBottoms()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+jeans&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

    function displayWomenCasualBottomsHot()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=women+shorts&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

//***********Men Clothes****************

    function displayMenJackets()
    
    {
      $(".clothing_jackets").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=men+jackets&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_jackets').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_jacket = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_jacket);
          clothingImage_jacket = $("<img>").attr("src", clothingImage_jacket); //Passes still image link to the image src
          $(".clothing_jackets").append(clothingImage_jacket);
        }

    
      }); 

    }

    function displayMenCoats()
    
    {
      $(".clothing_jackets").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=men+coats&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_jackets').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          clothingImage_jacket = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_jacket);
          clothingImage_jacket = $("<img>").attr("src", clothingImage_jacket); //Passes still image link to the image src
          $(".clothing_jackets").append(clothingImage_jacket);
        }

    
      }); 

    }

 function displayMenSnow()
    {
      $(".umbrella").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=snow+boots+men&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})
    
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_umbrella').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          //Transfer content to HTML
          umberellaImage = response.products[i].image.sizes.IPhone.url;
          console.log(umberellaImage);
          umberellaImage = $("<img>").attr("src", umberellaImage); //Passes still image link to the image src
          $(".umbrella").append(umberellaImage);
        }

    
      }); 

    }

    function displayMenTopsBusiness()
    {
      $(".clothing_tops").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=mens+dress+shirts&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        //Transfer content to HTML
        $('.category_tops').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          clothingImage_top = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_top);
          clothingImage_top = $("<img>").attr("src", clothingImage_top); //Passes still image link to the image src
          $(".clothing_tops").append(clothingImage_top);
        }

    
      }); 

    }

        function displayMenPantsBusiness()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=mens+dress+pants+business&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        //Transfer content to HTML
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

    function displayMenTopsCasual()
    {
      $(".clothing_tops").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=mens+tops&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        //Transfer content to HTML
        $('.category_tops').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          clothingImage_top = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_top);
          clothingImage_top = $("<img>").attr("src", clothingImage_top); //Passes still image link to the image src
          $(".clothing_tops").append(clothingImage_top);
        }

    
      }); 

    }

    function displayMenPantsCasual()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=men+pants&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        //Transfer content to HTML
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

    function displayMenPantsCasualHot()
    {
      $(".clothing_bottoms").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=men+shorts&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})    


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        //Transfer content to HTML
        $('.category_bottoms').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          clothingImage_bottom = response.products[i].image.sizes.IPhone.url;
          console.log(clothingImage_bottom);
          clothingImage_bottom = $("<img>").attr("src", clothingImage_bottom); //Passes still image link to the image src
          $(".clothing_bottoms").append(clothingImage_bottom);
        }

    
      }); 

    }

    //***********Umbrellas****************

        function displayMENUmbrella()
    {
      $(".umbrella").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=mens+hand+umbrella&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})


      //Transfer content to HTML
      


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_umbrella').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          umberellaImage = response.products[i].image.sizes.IPhone.url;
          console.log(umberellaImage);
          var umberellaImage = $("<img>").attr("src", umberellaImage); //Passes still image link to the image src
          $(".umbrella").append(umberellaImage);

          //URL
          var umbrellaLink = response.products[i].clickUrl;
          console.log("LINK " + umbrellaLink);

          

        }

    
      }); 

    }

    function displayWOMENUmbrella()
    {
      $(".umbrella").empty();

      // Here we are building the URL we need to query the database
      var queryURLShop = "http://api.shopstyle.com/api/v2/products?pid=uid7169-36888263-28&fts=umbrella&offset=0&limit=5";
      // Log the queryURLShop
      console.log(queryURLShop);

      // AJAX call to the Shop Style API
      $.ajax({url: queryURLShop, method: 'GET'})


      //Transfer content to HTML
      


      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) 
      {
        $('.category_umbrella').html("Category: " + response.metadata.category.fullName);
        // Log the resulting object
        console.log(response);
        for (i=0; i < response.products.length; i++) 
        {
          umberellaImage = response.products[i].image.sizes.IPhone.url;
          console.log(umberellaImage);
          var umberellaImage = $("<img>").attr("src", umberellaImage); //Passes still image link to the image src
          $(".umbrella").append(umberellaImage);
        }

           
      }); 

     

    }

//***********Test Function Calls**************

//displayWomenJackets();

//displayWomenSnow();

//displayWomenCoats()

//displayWomenBusinessTops();

//displayWomenCasualTops();

//displayWomenCasualBottoms();

//displayWomenCasualBottomsHot();

//displayWomenBusinessBottoms();

//displayWOMENUmbrella();

//displayMENUmbrella()

//displayMenTopsBusiness();

//displayMenPantsBusiness();

//displayMenJackets();

//displayMenCoats();

//displayMenSnow();

//displayMenPantsCasual();

//displayMenTopsCasual();

//displayMenPantsCasualHot();

/*Logic for calling display clothing options

Temperature

***Business***

  if (weather.tempF < 50) rec = "Coats & Pants and Tops";
  else if (weather.tempF < 68) rec = "Pants & Top & Jacket weather";
  else if (weather.tempF < 75) rec = "Pants & Top weather";
  else if (weather.tempF < 100) rec = "Pants & Top weather";


***Casual***

if (weather.tempF < 50) rec = "Coats & Casual Pants & Casual Tops";
  else if (weather.tempF < 68) rec = "Casual Pants & Top & Jacket weather";
  else if (weather.tempF < 75) rec = "Casual Pants & Top weather";
  else if (weather.tempF < 100) rec = "Shorts & Top weather";


***Acessories***
if weather forecast = rain show umbrellas
if weather forecast = snow show snow shoes */


//**********Business Men Outfit************
function wizardManBusiness()
{
  if (temp < 50)
  {
    displayMenCoats();
    displayMenPantsBusiness();
    displayMenTopsBusiness();
  }

  else if (temp < 68)
  {
    displayMenPantsBusiness();
    displayMenTopsBusiness();
    displayMenJackets();
  }

  else if (temp < 75)
  {
    displayMenPantsBusiness();
    displayMenTopsBusiness();
  }

  else if (temp < 100)
  {
    displayMenPantsBusiness();
    displayMenTopsBusiness();
  }



  if (forecast == "chancerain" || forecast == "nt_chancerain" || forecast == "chancetstorms" || forecast =="nt_chancetstorms" || forecast =="rain" || forecast =="nt_rain" || forecast == "tstorms" || forecast == "nt_tstorms")
  {
    displayMENUmbrella();
  }

  else if (forecast == "snow" || forecast == "nt_snow" || forecast == "chancesnow" || forecast == "nt_chancesnow" || forecast == "flurries" || forecast == "nt_flurries" || forecast == "sleet" || forecast == "nt_sleet" || forecast == "chancesleet" || forecast == "nt_chancesleet")
  {
    displayMenSnow();
  }


}

//wizardManBusiness();

//**********Casual Men Outfit************
function wizardManCasual()
{
  if (temp < 50)
  {
    displayMenCoats();
    displayMenPantsCasual();
    displayMenTopsCasual();
  }

  else if (temp < 68)
  {
    displayMenPantsCasual();
    displayMenTopsCasual();
    displayMenJackets();
  }

  else if (temp < 75)
  {
    displayMenPantsCasual();
    displayMenTopsCasual();
  }

  else if (temp < 100)
  {
    displayMenPantsCasualHot();
    displayMenTopsCasual();
  }



  if (forecast == "chancerain" || forecast == "nt_chancerain" || forecast == "chancetstorms" || forecast =="nt_chancetstorms" || forecast =="rain" || forecast =="nt_rain" || forecast == "tstorms" || forecast == "nt_tstorms")
  {
    displayMENUmbrella();
  }

   else if (forecast == "snow" || forecast == "nt_snow" || forecast == "chancesnow" || forecast == "nt_chancesnow" || forecast == "flurries" || forecast == "nt_flurries" || forecast == "sleet" || forecast == "nt_sleet" || forecast == "chancesleet" || forecast == "nt_chancesleet")
  {
    displayMenSnow();
  }


}

//wizardManCasual();

//**********Casual WOMAN Outfit************
function wizardWomanCasual()
{
  if (temp < 50)
  {
    displayWomenCoats();
    displayWomenCasualBottoms();
    displayWomenCasualTops();
  }

  else if (temp < 68)
  {
    displayWomenCasualBottoms();
    displayWomenCasualTops();
    displayWomenJackets();
  }

  else if (temp < 75)
  {
    displayWomenCasualBottoms();
    displayWomenCasualTops();
  }

  else if (temp < 100)
  {
    displayWomenCasualBottomsHot();
    displayWomenCasualTops();
  }



  if (forecast == "chancerain" || forecast == "nt_chancerain" || forecast == "chancetstorms" || forecast =="nt_chancetstorms" || forecast =="rain" || forecast =="nt_rain" || forecast == "tstorms" || forecast == "nt_tstorms")
  {
    displayWOMENUmbrella();
  }

   else if (forecast == "snow" || forecast == "nt_snow" || forecast == "chancesnow" || forecast == "nt_chancesnow" || forecast == "flurries" || forecast == "nt_flurries" || forecast == "sleet" || forecast == "nt_sleet" || forecast == "chancesleet" || forecast == "nt_chancesleet")
  {
    displayWomenSnow();
  }


}

//wizardWomanCasual();


//**********Business WOMAN Outfit************
function wizardWomanBusiness()
{
  if (temp < 50)
  {
    displayWomenCoats();
    displayWomenBusinessBottoms();
    displayWomenBusinessTops();
  }

  else if (temp < 68)
  {
    displayWomenBusinessBottoms();
    displayWomenBusinessTops();
    displayWomenJackets();
  }

  else if (temp < 75)
  {
    displayWomenBusinessBottoms();
    displayWomenBusinessTops();
  }

  else if (temp < 100)
  {
    displayWomenBusinessBottoms();
    displayWomenBusinessTops();
  }



  if (forecast == "chancerain" || forecast == "nt_chancerain" || forecast == "chancetstorms" || forecast =="nt_chancetstorms" || forecast =="rain" || forecast =="nt_rain" || forecast == "tstorms" || forecast == "nt_tstorms")
  {
    displayWOMENUmbrella();
  }

 else if (forecast == "snow" || forecast == "nt_snow" || forecast == "chancesnow" || forecast == "nt_chancesnow" || forecast == "flurries" || forecast == "nt_flurries" || forecast == "sleet" || forecast == "nt_sleet" || forecast == "chancesleet" || forecast == "nt_chancesleet")
  {
    displayWomenSnow();
  }


}

		if (forecast != undefined && temp != undefined)
		{
			console.log("Run Sunita Code!!! :)");
			console.log("forecast==" + forecast + "  temp==" + temp);
			Sunita();


		}
	}
	
//on click event for user input------------------




	$("#wizard-search").on("click", function()
	{
		forecast = undefined;
		temp = undefined;

		//empty weather and clothing divs before adding data to them
		$("#weatherHolder").empty();

		$('#greetingDisplay').empty();
		
		$(".umbrella").empty();
		$('.clothing_tops').empty();
		$('.clothing_bottoms').empty();
		$(".clothing_jackets").empty();

		$('.category_umbrella').empty();		
		$('.category_jackets').empty();
		$('.category_tops').empty();
		$('.category_bottoms').empty();
>>>>>>> master

		
		

		

		//define variables for on click event ----------------------

		occasion = $('#occasion-input').val();
		console.log(occasion);

		
		var inputZipcode = $("#zip-form").val();
		console.log(inputZipcode);

<<<<<<< HEAD
		var inputZipcode = $("#zip-form").val();
=======
>>>>>>> master
		
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

<<<<<<< HEAD
					var temp = $("#currentHolder").data("temp");
					console.log(temp);
					// $("body").append(weatherHolder);
				});

			} else 
=======
					temp = $("#currentHolder").data("temp");
					console.log("ending temp " + temp);
					// $("body").append(weatherHolder);

					clothesFunction();
				});

			} 

			else 
>>>>>>> master
			{
				displayCurrent();
			}

<<<<<<< HEAD
			//Clothing functions.
			// wizardManBusiness();
			// wizardManCasual();
			// wizardWomanCasual();
			// wizardWomanBusiness();
=======
	
>>>>>>> master
		
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

<<<<<<< HEAD
					var forecast = $("#forecastHolder").data("forecast");
					console.log(forecast);

				});
			
			} else 
=======
					forecast = $("#forecastHolder").data("forecast");
					console.log("ending forecast " + forecast);

					clothesFunction();


				});
			
			} 

			else 
>>>>>>> master
			{
				displayForecast();

			}

<<<<<<< HEAD
			//clothing functions
			// wizardManBusiness();
			// wizardManCasual();
			// wizardWomanCasual();
			// wizardWomanBusiness();
=======
			///

>>>>>>> master
		
		};

		displayCurrentWithInput();
		displayForecastWithInput();
		console.log("ending forecast2 " + forecast);






<<<<<<< HEAD
	// console.log(temp);
	// console.log(forecast);
=======
>>>>>>> master

		return false;
	});

});


