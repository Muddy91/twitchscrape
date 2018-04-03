module Api::V1
  class ProfilesController < ApplicationController
    def index
      profile = ProfileService.new(params[:user]).get_profile_data
      render json: profile
    end
  end

end
