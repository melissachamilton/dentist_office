class Billing < ApplicationRecord
    include HTTParty
    base_uri 'https://api.stripe.com'
  
    def self.generate(api_id)
      payment = find_by api_id: api_id
      return payment unless payment.nil?

      response = get "/#{api_id}"
    placeholder_image = "https://www.placecage.com/c/#{200 + api_id}/#{200 + api_id}"

    create!(name: response['name'],
      image: placeholder_image,
      api_id: api_id)
      
    end
  end
end
