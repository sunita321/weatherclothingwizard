
$(document).ready(function() {

	// Capture Button Click
	$("#addUser").on("click", function() {

		// Capture User Inputs and store into variables
		var name = $('#nameinput').val().trim(); 
		var profession = $('#professioninput').val().trim(); 
		var age = $('#ageinput').val().trim(); 
		var gender = $('#genderinput').val().trim(); 

		// Console log each of the user inputs to confirm you are receiving them
		console.log(name);
		console.log(profession);
		console.log(age);
		console.log(gender);

		// Replaces the content in the "recentMember" div
		$("#recentMember").empty();

		// Dump all of the new information into the relevant sections
		$("#id").append("<h1>" + name);
		$("#id").append("<h4>" + profession);
		$("#id").append("<h4>" + age);
		$("#id").append("<p>" + gender);

		// < -----------------------------------------------------------

		// Clear localStorage
		localStorage.clear();

		// Store all content into localStorage
		localStorage.setItem("name", name); 
		localStorage.setItem("profession", profession);
		localStorage.setItem("age", age);
		localStorage.setItem("gender", gender);

		// < -----------------------------------------------------------

		// Don't refresh the page!
		return false;
	});

	// <------------------------------------------------

	// By default display the content from localStorage
	$("#id").empty();
	$("#id").append("<h1>" + localStorage.getItem("name"));
	$("#id").append("<h4>" + localStorage.getItem("profession"));
	$("#id").append("<h4>" + localStorage.getItem("age"));
	$("#id").append("<p>" + localStorage.getItem("gender"));

	// <------------------------------------------------
});

