//possibly add class or id later to differentiate tops, bottoms, accessories.

//start dumping to HTML
var resultSection = $("<div>");
resultSection.addClass("well");
resultSection.attr("id", "resultSection-" + i);
$("#largeResultsDiv").append(resultSection);

//Attach content to appropriate well/div
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);
$("#resultSection-" + i).append("<img src='url.from.data'>" + ClothingObject.data.article[1].etc);

//empty div before adding html content
$("#largeResultsDiv").empty();