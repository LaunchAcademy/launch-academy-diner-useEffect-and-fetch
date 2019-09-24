import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const addNewDish = (newDishFormPayload) => {
    // debugger
    console.log(newDishFormPayload)
    fetch("/api/v1/dishes", {
      method: "POST",
      body: JSON.stringify(newDishFormPayload)
    })
    .then(response => {
      return response.json()
    })
    .then((parsedPersistedDish) => {
      setDishes([...dishes, parsedPersistedDish])
    })


  }

  useEffect(() => {
    fetch("/api/v1/dishes")
    .then((response) => {
      // check to see if the response is ok
      // if not, throw an error
      return response.json()
    })
    .then((parsedDishesBody) => {
      setDishes(parsedDishesBody)
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
