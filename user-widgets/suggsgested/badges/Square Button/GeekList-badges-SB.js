// make ourselves a jquery obj reference to the "results" div
var $resultsContainer = $('#results');

// the geekList API URL
var geeklistURL = "http://geekli.st/csanz/cards.json?page=0&per_page=3000";

// using YQL to get around same domain origin issues we create a jquery ajax call to the geekList API
var geeklistCards = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22" + encodeURIComponent(geeklistURL) + "%22&format=json&callback=", function(data) {
    "use strict";
    var totalHighfives = 0;
    var totalViews = 0;

// first off the top we display the geeks name from the json object that was returned
    $resultsContainer.children('#geekName').html(data.query.results.json.screen_name + "'s total numbers");

// use jquery .each to loop through each of the geeks cards to add up the highfives and views    
    $.each(data.query.results.json.cards, function(index, card) {
        totalHighfives += parseInt(card.num_of_highfives, 10);
        totalViews += parseInt(card.num_of_views, 10);
    });

// wrap it up by displaying the geeks combined views and highfives
    $resultsContainer.children('#geekViews').html("Total Views: " + totalViews);
    $resultsContainer.children('#geekHighfives').html("Total Highfives: " + totalHighfives);
});
