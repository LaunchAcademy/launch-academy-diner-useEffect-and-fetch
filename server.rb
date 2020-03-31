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
  # binding.pry
  # grab the dishe objects from our JSON file
  dishes = read_dishes

  # everything below here is about returning a correct JSON response
  # set a header of JSON
  content_type :json
  # return the dish object array as JSON
  json dishes
end

post "/api/v1/dishes" do
  # grab the existing/old array of dishes
  current_dishes = read_dishes

  # grab and parse the new dish from params
  dish = JSON.parse(request.body.read)

  # determine a new id for our new dish, by taking the id of the existing last dish
  dish["id"] = current_dishes.last["id"] + 1

  # add our new dish to our old dishes, but only in memory, it hasnt been added to the file yet!
  current_dishes << dish

  # take this new version of all of our dishes, and replace the old JJSON file with it
  File.write("dishes.json", JSON.pretty_generate(current_dishes))

  content_type :json
  status 201
  # we also pass this new dish BACK, to confirm that everyhting worked successfully and because it has an id
  json dish
end

# SINATRA VIEWS ROUTES
get "*" do
  erb :home
end
