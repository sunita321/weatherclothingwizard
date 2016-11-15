//start dumping to HTML
var wellSection = $("<div>");
wellSection.addClass("well");
wellSection.attr("id", "articleWell-" + i);
$("#wellSection").append(wellSection);

//Attach content to appropriate well/div
$("#articleWell-" + i).append("<h3>" + ClothingObject.data.article[1].etc + "</h3>");

//empty div before adding html content
$("#wellSection").empty();