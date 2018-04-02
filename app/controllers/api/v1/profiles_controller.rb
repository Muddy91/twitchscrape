module Api::V1
  class ProfilesController < ApplicationController
    def index
      profile = ProfileService.new(params[:user]).get_profile_data
      # profile = {"profile_cover":"\"https://static-cdn.jtvnw.net/jtv_user_pictures/kaitlyn-profile_banner-877471bc4cefc50e-480.jpeg\"","profile_picture":"https://static-cdn.jtvnw.net/jtv_user_pictures/kaitlyn-profile_image-a6b4336ede1667bd-70x70.png","profile_name":"kaitlyn","videos":"896","followers":"75,376","following":"126"}
      render json: profile
    end
  end
end
