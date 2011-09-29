//You need an anonymous function to wrap around your function to avoid conflict
(function($) {
    //Attach this new method to jQuery
    $.fn.extend({
        //This is where you write your plugin's name
        geeklistbadge: function(options) {

            // set the default options
            var defaults = {
                username: 'csanz'
                //todo: methods for multiple size options
            };
            var options = $.extend(defaults, options);


            // the geekList API URL
            var geeklistURL = "http://geekli.st/" + options.username + "/cards.json?page=0&per_page=3000";
            // make ourselves a jquery obj reference to the "results" div
            var $resultsContainer = $(this);
            // add the needed html display elements and style them
            $resultsContainer.append("<span id='geekName'></span>").append("<span id='geekViews'></span>").append("<span id='geekHighfives'></span>");
            $resultsContainer.css({
                'width': '125px',
                'height': '125px',
                'background-image': 'url(https://github.com/Suggsgested/widgets/raw/master/user-widgets/suggsgested/badges/Square%20Button/images/banner.jpg)',
                'position': 'relative'
            });
            $resultsContainer.children('#geekName').css({
                'position': 'absolute',
                'font-family': 'arial',
                'font-size': '12px',
                'color': '#9B9C9C',
                'top': '13px',
                'width': '100%',
                'text-align': 'center'
            });
            $resultsContainer.children('#geekViews').css({
                'position': 'absolute',
                'font-family': 'arial',
                'font-size': '16px',
                'color': '#C1C0C0',
                'width': '47px',
                'top': '43px',
                'left': '9px'
            });
            $resultsContainer.children('#geekHighfives').css({
                'position': 'absolute',
                'font-family': 'arial',
                'font-size': '16px',
                'color': '#C1C0C0',
                'width': '54px',
                'top': '44px',
                'left': '60px',
                'text-align': 'right'
            });

            // using YQL to get around same domain origin issues we create a jquery ajax call to the geekList API
            var geeklistCards = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22" + encodeURIComponent(geeklistURL) + "%22&format=json&callback=", function(data) {
                "use strict";
                var totalHighfives = 0;
                var totalViews = 0;

                // first off the top we display the geeks name from the json object that was returned
                $resultsContainer.children('#geekName').html("@" + data.query.results.json.screen_name);

                // use jquery .each to loop through each of the geeks cards to add up the highfives and views    
                $.each(data.query.results.json.cards, function(index, card) {
                    totalHighfives += parseInt(card.num_of_highfives, 10);
                    totalViews += parseInt(card.num_of_views, 10);
                });

                // wrap it up by displaying the geeks combined views and highfives
                $resultsContainer.children('#geekViews').html(totalViews);
                $resultsContainer.children('#geekHighfives').html(totalHighfives);
            });
        }
    });
})(jQuery);