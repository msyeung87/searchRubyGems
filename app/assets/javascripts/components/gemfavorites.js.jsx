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
			favlist += '<div class="col-sm-4"><div class="fav-gems-page"><img src="/assets/star-blue.png" id="' + parsedFavs[i] + '" onClick="toggleFavorites(this.id);doNotDisplay(this.id)">  <a href="https://rubygems.org/gems/' + parsedFavs[i] + '" target="_blank">' + parsedFavs[i] + '</a> </div></div>';
	    }
		$('#favhtml').append(favlist);
	},
	

});