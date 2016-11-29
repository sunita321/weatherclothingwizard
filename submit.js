$(document).ready(function()
{
	$("#wizard-search").on("click", function()
	{
		var gender = $('#gender-input').val();
		console.log(gender);

		var occasion = $('#occasion-input').val();
		console.log(occasion);

		var zipcode = $('#zip-form').val();
		console.log(zipcode);

		return false;
	})

});



