require 'open-uri'
require 'watir'
require 'nokogiri'

class ProfileService
  def initialize profile
    @profile = profile    
  end

  def get_profile_data
    data_hash = {}
    url = get_profile_url
    browser = Watir::Browser.new
    browser.goto url
    sleep 3
    doc = Nokogiri::HTML(browser.html)
    # data_hash[:profile_cover] = doc.search('.directory-header__banner').map{ |n| n['style'][/url\((.+)\)/, 1] }.first
    data_hash[:profile_cover] = doc.at_css('.channel-banner__image').attr('style')
    data_hash[:profile_picture] = doc.at_css('img.tw-image').attr('src')
    data_hash[:profile_name] = doc.search('.channel-header__user h5').text
    items_count = doc.search('.channel-header__item-count.tw-flex.tw-mg-l-05 span')
    data_hash[:videos] = items_count[0].text
    data_hash[:followers] = items_count[1].text
    data_hash[:following] = items_count[2].text
    data_hash
  end

  def get_profile_url
    url = "https://www.twitch.tv/#{@profile}"
  end

end
