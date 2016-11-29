$(document).ready(function(){

$('.dropdown-toggle').dropdown()
$(".navigation").on("click", function(){
	//console.log("userclick");
	//$(this).text()
	
var gender = $(this).text()
console.log(gender)
var name = localStorage.getItem("name")
console.log(name);
return false



})
});

