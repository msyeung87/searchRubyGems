var SearchGems = React.createClass({
	handleSubmit(e){
		var inputQuery = document.getElementById('q').value;
		var gemResults = document.getElementById('gemresults');
		if(inputQuery === ''){
			alert('Please search for a gem');
		}else{
			// output gem results
			console.log(inputQuery);
			gemResults.innerText(inputQuery);

			
		}
		e.preventDefault();
	},

	render: function () {
		return (
			<div>
				<h1>Search Gems</h1>
				<form onSubmit={this.handleSubmit} action="/searchGems">
					<div>
						<input type="text" name="searchGems" id="searchGems"/>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	},
	

});