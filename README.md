# Launch Academy Diner

Currently, our application is great at tracking a list of amazing Launch Academy dishes in state, lets update the application to persist and use information from the backend!

- Currently, a list of dishes is found in dishes.json. Using the endpoints provided in the `server.rb` file, set up useEffect and fetch to retrieve this array of dish objects and display them on the screen.

- We want to add our own dishes! Upon submitting the form, ensure that a POST fetch request is made with your new dish that persists the dish as an object in dishes.json. A route has been set up for you. Make sure to use your newly persisted dish by sending it back as in the response of your fetch post and subsequently adding it to the page.

### Working with JSON

#### Frontend JSON
- JSON.stringify(someinfo) => turning JS into JSON
- someData.json() => turning JSON into JS

#### Backend (Ruby) JSON
-  JSON.parse(someJSONData) => turns JSON into a Ruby data structure
-  data.to_json => turns a ruby data structure into JSON
