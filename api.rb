require 'HTTParty'
require 'pp'

response = HTTParty.get('https://catfact.ninja/facts?limit=10')

pp response.code, response.message, response.headers.inspect

pp response["data"]