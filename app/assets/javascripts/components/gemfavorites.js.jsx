var GemFavorites = React.createClass({

	render () {
		return (
			this.getFavorites()
		);
	},

	getFavorites () {
		var favlist = '';
		var favoriteGemsArray = localStorage.getItem("favoriteGems", JSON.stringify(favoriteGems));
		var parsedFavs = JSON.parse(favoriteGemsArray);
	    for(var i = 0; i < parsedFavs.length; i++) {
			favlist += '<div>' + parsedFavs[i] + ' <img src="/assets/star-blue.png" id="' + parsedFavs[i] + '" onClick="toggleFavorites(this.id);doNotDisplay(this.id)"></div>';
	    }
		$('#favhtml').append(favlist);
	},
	

});