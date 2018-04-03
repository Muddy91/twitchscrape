require 'open-uri'
require 'headless'
require 'watir'
require 'nokogiri'

class ProfileService
  def initialize profile
    @profile = profile    
  end

  def get_profile_data
    data_hash = {}
    video_arr = []
    url = get_profile_url
    video_url = get_video_url
    begin
    headless = Headless.new
    headless.start
    browser = Watir::Browser.start url
    browser1 = Watir::Browser.start video_url
    sleep 3
    doc = Nokogiri::HTML(browser.html)
    doc1 = Nokogiri::HTML(browser1.html)
    browser.close
    browser1.close
    headless.destroy

    data_hash[:profile_cover] = doc.search('.channel-banner__image').map{ |n| n['style'][/url\((.+)\)/, 1] }.first
    data_hash[:profile_picture] = doc.at_css('.channel-header img.tw-image').attr('src')
    data_hash[:profile_name] = doc.search('.channel-header__user h5').text
    items_count = doc.search('.channel-header__item-count.tw-flex.tw-mg-l-05 span')
    data_hash[:videos] = items_count[0].text
    data_hash[:followers] = items_count[1].text
    data_hash[:following] = items_count[2].text
    if data_hash[:videos].to_i > 0
      vid = doc1.css('.tw-tower.tw-tower--gutter-sm.tw-tower--300.tw-flex-wrap .tw-full-width')
      vid[0..3].each do |v|
        video_hash = {}
        video_hash[:views] = v.at_css('.video-preview-card__preview-overlay-stat.tw-left-0 .tw-stat__value').text
        video_hash[:length] = v.at_css('.video-preview-card__preview-overlay-stat.tw-right-0 .tw-stat__value').text
        video_hash[:image] = v.at_css('figure.tw-aspect--16x9 .video-preview-card__preview-image').attr('src')
        video_hash[:title] = v.at_css('figure.tw-aspect--16x9 .video-preview-card__preview-image').attr('alt') 
        video_arr.push(video_hash) 
      end
    end
    data_hash[:status] = true
    rescue
    data_hash= { statue:false, videos: 0, followers: 0, following: 0, profile_name: 'dummy', profile_cover: 'https://static.twitchcdn.net/assets/bg_glitch_pattern-34ca2e369aad1ed33b57f3d2d59c70eb.png', profile_picture: 'https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-70x70.jpg' }
    end
    data_hash[:video_content] = video_arr
    data_hash
  end

  private

  def get_profile_url
    url = "https://www.twitch.tv/#{@profile}"
  end

  def get_video_url
    url = "https://www.twitch.tv/#{@profile}/videos/all"
  end

end
