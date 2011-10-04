$('document').ready(function(){

// set up the display
var CredImgURL = chrome.extension.getURL("GeekCred/geek-cred-bkgnd.png");
$('#act-info-wrapper').prepend($("<div id='Geek-Cred' style='width: 40px;height: 32px;padding-top: 8px;font-weight:bold;background:url(" + CredImgURL + ");position: absolute;top: 0px;left: 0px;color:white;text-align:center;'></div>"));


// most of the time our code seems to fire BEFORE the "active user" div is done rendering and i dont know why so ive had to target the first user in the feed would be much better to target the active user div...
// console.log($('.act-info-avatar').attr('href'));

var $initGeek = $('#activity-list li:first-child');
initGeekCred($initGeek);

// initialize the first active geekcred
function initGeekCred($initGeek){
// grab initial active geek username
var geekName = $initGeek.attr("data-user");
var geekType = $initGeek.attr("data-type");

	if ((geekType == 'profile') || (geekType == 'signup') || (geekType == 'follow')){
		$('#Geek-Cred').hide();
	}else{
		$('#Geek-Cred').show();
		fetchGeekCred(geekName);	
	}
}

// calculate active geekcred
function fetchGeekCred(geekName){
var geekCred = 0;
var geeklistURL = "http://geekli.st/" + geekName + "/cards.json?page=0&per_page=3000";
var totalHighfives = 0;
var totalViews = 0;
var numberOfCards = 0;

// using YQL to get around same domain origin issues we create a jquery ajax call to the geekList API
 var geeklistCards = $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22" + encodeURIComponent(geeklistURL) + "%22&format=json&callback=", function(data) {
                "use strict";
				
				totalHighfives = 0;
				totalViews = 0;
				if (data.query.results.json.total){
					numberOfCards = parseInt(data.query.results.json.total, 10);
				}
				
 // use jquery .each to loop through each of the geeks cards to add up the highfives and views    
                $.each(data.query.results.json.cards, function(index, card) {
                    totalHighfives += parseInt(card.num_of_highfives, 10);
                    totalViews += parseInt(card.num_of_views, 10);
                });

// geekCred calculation (totalHighfives + totalViews / numberOfCards)
geekCred = (totalHighfives + totalViews) / numberOfCards	+ ''				

showGeekCred(Math.floor(geekCred));

	//console.log(geekName + " " + geekType + " (" + totalHighfives + "+" + totalViews + ") /" + numberOfCards);
				
});				
				




}

// update display with geekcred 
function showGeekCred(geekCred){

$('#Geek-Cred').text(geekCred);

}


// grab username when activitiy-list clicked on
$('#activity-list li').live("click", function(){

	geekName = $(this).attr("data-user");
	geekType = $(this).attr("data-type");

		if ((geekType == 'profile') || (geekType == 'signup') || (geekType == 'follow')){
			$('#Geek-Cred').hide();
		}else{
			$('#Geek-Cred').show();
			fetchGeekCred(geekName);	
		}	



});


});