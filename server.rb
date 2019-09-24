require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/views"

# GET UNICORNS FROM UNICORNS.JSON
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
  binding.pry
  dishes = read_dishes

  content_type :json
  json dishes
end



post "/api/v1/dishes" do
  binding.pry
  current_dishes = read_dishes

  dish = JSON.parse(request.body.read)
  dish["id"] = current_dishes.last["id"] + 1

  current_dishes << dish
  File.write("dishes.json", JSON.pretty_generate(current_dishes))
  # binding.pry

  content_type :json
  status 201
  json dish
end

# SINATRA VIEWS ROUTES
get "*" do
  erb :home
end
