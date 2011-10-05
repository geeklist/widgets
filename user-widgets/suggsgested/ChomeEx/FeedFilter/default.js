$('document').ready(function(){

	// set up the display

	$('#microform').css({'position':'relative'}).append($("<div id='df-filter' style='position: absolute;width: 330px;height: 25px;top: 11px;left: 210px;'></div>"));
	$('#df-filter')
		.append($("<div id='highfive' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:47px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>highfive</div>"))
		.append($("<div id='card' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:33px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>card</div>"))
		.append($("<div id='micro' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:42px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>micro</div>"))
		.append($("<div id='follow' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:50px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>follow</div>"))
		.append($("<div id='signup' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:50px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>signup</div>"))
		.append($("<div id='profile' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:40px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>profile</div>"))
		.append($("<div id='ping' class='df-filter-bttn' style='float:left;border: solid 1px #ccc;background-color: #eee;width:40px;text-align: center;margin: 0px 1px;cursor: pointer;color: #777;'>ping</div>"));



	// button action

	$('.df-filter-bttn').toggle(function() {
	  $(this).css({'background-color':'#ccc','color':'white'})
	  var buttonId = "." + $(this).attr('id');
	  $(buttonId).slideToggle();
	}, function() {
	  $(this).css({'background-color':'#eee','color':'#777'})
	  var buttonId = "." + $(this).attr('id');
	  $(buttonId).slideToggle();
	});

});


