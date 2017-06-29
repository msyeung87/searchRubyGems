class StaticPagesController < ApplicationController

  def root
  	if params[:q].present?
	  	@searchedGem = params[:q].downcase
		begin
			@results = Gems.info @searchedGem
		rescue JSON::ParserError => e
			@searchedGem = []
			@results = []
		end
	else
		@searchedGem = []
		@results = []
  	end
  	
  end

  def favorites
  end

end
