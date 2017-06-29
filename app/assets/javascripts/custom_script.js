var favoriteGems = [];

// Hides the selected gem on favorites page
function doNotDisplay(id){
	$('#'+id).parent().parent().hide();
}

function toggleFavorites(id) {
	if( $('#'+id).attr('src') === '/assets/star-gray.png' ) {
		// Adding gems to favorites array
		$('#'+id).attr('src','/assets/star-blue.png');
		favoriteGems.push(id);
	    localStorage.setItem("favoriteGems", JSON.stringify(favoriteGems));
	}else{
		// Removing gems from favorites array
		$('#'+id).attr("src","/assets/star-gray.png");

		// Find index of gem in the array
		var gemIndex = favoriteGems.indexOf(id);
		if(gemIndex > -1) {
			favoriteGems.splice(gemIndex, 1);
		}

		// Updates the localStorage
		localStorage.setItem("favoriteGems", JSON.stringify(favoriteGems));
	}
}

$( document ).ready(function() {
	// This is to load the appropriate star color on the page
    var loadedFavs = localStorage.getItem("favoriteGems", JSON.stringify(favoriteGems));
    var parsedFavs = JSON.parse(loadedFavs);

    for(var i = 0; i < parsedFavs.length; i++) {
    	$('#'+parsedFavs[i]).attr('src', '/assets/star-blue.png');
    	// Checks localStorage and have it on page load
    	favoriteGems.push(parsedFavs[i]);
    }

    // Toggles nav links background color
    if( window.location["pathname"] == '/' ) {
	    $('.search-link').addClass('selected-link');
	}else if (window.location["pathname"] == '/favorites') {
		$('.favorites-link').addClass('selected-link');
	}

	// Shows error if gem is not available
	var queryPath = window.location.search;
    var urlQuery = queryPath.match(/q/);
    if(urlQuery && $('.gem-results-name').length == 0 ){
    	$('.gem-error').append('Oh no! Looks like that gem can\'t be found.');
    	$('.search-form form input[type=text]').css('border-color', 'red');
    	$('.search-form form input[type=text]').css('color', 'red');
    }


});

