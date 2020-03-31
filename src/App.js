import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const addNewDish = (newDish) => {

    fetch("/api/v1/dishes", {
      method: "POST",
      body: JSON.stringify(newDish)
      // newDish.turnIntoJsonToBeSentToTheBackend()
    })
    .then((response) => {
      return response.json()
    })
    .then((parsedPersistedDish) => {
      setDishes([...dishes, parsedPersistedDish])
    })
  }

  useEffect(() => {

    fetch("/api/v1/dishes")
    .then((response) => {

      return response.json()
      // return response.turnJSONIntoJavascript()
    })
    .then((parsedDishesArray) => {
      setDishes(parsedDishesArray)
      // debugger
    })
  }, [])

  return(
    <div className='page'>
      <NewDishForm
        addNewDish={addNewDish}
      />

      <DishList
        dishes={dishes}
      />
    </div>
  )
}

export default App;
