import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    fetch("api/v1/dishes")
    .then((response) => {
      return response.json()
    })
    .then((parsedDishData) => {
      setDishes(parsedDishData)
    })
  }, [])

  const addNewDish = (newDishFormPayload) => {
    fetch("api/v1/dishes", {
      method: "POST",
      body: JSON.stringify(newDishFormPayload)
    })
    .then((response) => {
      return response.json()
    })
    .then((persistedDishWithAnId) => {
      setDishes([...dishes, persistedDishWithAnId])
      debugger
    })
  }

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
