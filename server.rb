require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/views"

def read_dishes
  JSON.parse(File.read("dishes.json"))
end

get "/" do
  redirect "/dishes"
end

get "/dishes" do
  erb :home
end

# API ENDPOINTS
get "/api/v1/dishes" do
  # binding.pry
  # retrieve dishes from json
  dishes = read_dishes

  # set response type to json for clarity
  content_type :json

  # send back a json response of dishes
  json dishes
end

post "/api/v1/dishes" do
  # grab the current dishes from the json file
  current_dishes = read_dishes

  # get the data from the POST request
  dish = JSON.parse(request.body.read)
  # binding.pry

  # create a new id for the new dish
  dish["id"] = current_dishes.last["id"] + 1

  # add the new dish to our dishes array
  current_dishes << dish
  # add the new array with our new dish to the file
  File.write("dishes.json", JSON.pretty_generate(current_dishes))

  # send back the dish as a response
  content_type :json
  status 201
  json dish
end

# SINATRA VIEWS ROUTES
get "*" do
  erb :home
end
