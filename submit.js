$(document).ready(function()
{
	//variable for dynamically created div to hold current weather conditions
	var currentHolder = $("<div class='panel' id='currentHolder'>");
	//variable for dynamically created div to hold weather forecast
	var forecastHolder = $("<div class='panel' id='forecastHolder'>");
	//eventually this needs to change to target Ruth's locally stored data...
	//***comment this out before combining code***
	// var zipcode = 34711 //eventually change this to content of localZipcode var
	//***comment this out before combining code***
	// storeZipcode = localStorage.setItem("zipcode", zipcode);
	//change this to zipcode for final app
	var localZipcode = localStorage.getItem("zipcode");

	var temp = $("#currentHolder").data("temp");

 	//weather underground API key
	var apiKey = "3f8d0b47644220a7"
	//array containing both query options for API call
	var weatherRequest = ["conditions", "forecast"];
	//URL for current weather conditions API call from weatherunderground-----------------------------change to zipcode for final app
	var currentURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[0] + "/q/" + localZipcode + ".json";
	//URL for forecasted weather API call from weatherunderground--------------------------------------change to zipcode for final app
	var forecastURL = "https://api.wunderground.com/api/" + apiKey + "/" + weatherRequest[1] + "/q/" + localZipcode + ".json";
	//created variable for API data request to be made
	var currentRequest = 
	{
		//url for reqest will === above var of urlQuery
		url: currentURL,
		//request method === GET
		method: "GET"
	};

	var forecastRequest = 
	{
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

	function displayCurrent() 
	{
		$("#displayCurrent").empty();

		$.ajax(currentRequest).done(function(currentResponse) {
		//console.log currentRequest var
		console.log(currentRequest);
		//console.log data response, objects from API
		console.log(currentResponse);

		var zip = localStorage.getItem("zipcode", storeZipcode);

		var tempData = currentResponse.current_observation.temp_f;
		$("#currentHolder").data("temp", tempData);
		console.log(tempData)

		var feelsLike = currentResponse.current_observation.feelslike_f;

		var currentIcon = currentResponse.current_observation.icon_url;

		$(currentHolder).html("<h3>Current Conditions for " + zip + ":</h3><br>" + "<img src='" + currentIcon + "'>" + "<h2>" + tempData + "</h2>" + "<h4>(Feels like " + feelsLike + ")</h4>");

		$("#weatherHolder").prepend(currentHolder);
		// $("body").append(weatherHolder);

		});
		
	};

		function displayForecast() 
		{
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

				var forecastData = forecastResponse.forecast.txt_forecast.forecastday[0].icon;
				console.log(forecastData);
				console.log(forecast);
				var now = new Date();
				
				var hours = now.getHours();
				
				var dayText = forecastResponse.forecast.txt_forecast.forecastday[0].fcttext;

				var nightText = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext;
				
				if (hours > 15) {
					
					forecastData = forecastResponse.forecast.txt_forecast.forecastday[1].icon;
					
					// text = forecastResponse.forecast.txt_forecast.forecastday[1].fcttext; 
				} 

				var dayTitle = forecastResponse.forecast.txt_forecast.forecastday[0].title;

				var nightTitle = forecastResponse.forecast.txt_forecast.forecastday[1].title;


				

			$(forecastHolder).html("<h3>Forecast:</h3>" + "<b>" + dayTitle + "</b>" + dayIconImage + dayText + "<br>" + "<b>" + nightTitle + "</b>" + nightIconImage + nightText);
			$("#forecastHolder").data("forecast", forecastData); 
			// console.log(forecast);
			$("#weatherHolder").append(forecastHolder);
			});

		};

////////////////////////////////////////////////Clothes JS///////////////////////////////////////////////////////////////////////


	$("#wizard-search").on("click", function()
	{
		
		var gender = "female";

		var occasion = $('#occasion-input').val();
		console.log(occasion);

		var zipcode = $('#zip-form').val();
		console.log(zipcode);

<<<<<<< HEAD
		// This is our API Key
    var ShopStyleAPIKey = "uid7169-36888263-28";
    var clothingImage_top = "";
    var clothingImage_bottom = "";
    var clothingImage_jacket = "";
    var umberellaImage = "";

    // var temp = 44;


    // var forecast = "rain";

    //var occasion = "business";

    var gender = localStorage.getItem("gender", gender);


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

//wizardWomanBusiness();

//********************Gender and Occasion*************************

if (gender == "male" && occasion == "business")
{
  wizardManBusiness();
}
else if (gender == "male" && occasion == "casual")
{
  wizardManCasual();
}
else if (gender == "female" && occasion == "business")
{
  wizardWomanBusiness();
}
else if (gender == "female" && occasion == "casual")
{
  wizardWomanCasual();
}

=======

		var zipcode = $('#zip-form').val();
		console.log(zipcode);

		$("#weatherHolder").empty();
		$("#currentHolder").html("");
		$("forecastHolder").html("");
		

			// This is our API Key
		    var ShopStyleAPIKey = "uid7169-36888263-28";
		    var clothingImage_top = "";
		    var clothingImage_bottom = "";
		    var clothingImage_jacket = "";
		    var umberellaImage = "";

		    //var temp = 44;


		    var forecast = forecastData;

		    //var occasion = "business";

		    


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

		//wizardWomanBusiness();

		//********************Gender and Occasion*************************

		if (gender == "male" && occasion == "business")
		{
		  wizardManBusiness();
		}
		else if (gender == "male" && occasion == "casual")
		{
		  wizardManCasual();
		}
		else if (gender == "female" && occasion == "business")
		{
		  wizardWomanBusiness();
		}
		else if (gender == "female" && occasion == "casual")
		{
		  wizardWomanCasual();
		}


		return false;
	})

});


