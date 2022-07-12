import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    const response = await fetch("/api/v1/dishes")
    const dishesDataBody = await response.json()
    setDishes(dishesDataBody)
  }

  useEffect(() => {
    fetchDishes()
  }, [])

  const addNewDish = async (newDishFormPayload) => {

    const response = await fetch("/api/v1/dishes", { 
      method: "POST", 
      body: JSON.stringify(newDishFormPayload),
      headers: new Headers({
        "Content-type": "application/json"
      })
    })  

    const newDishFromTheBackend = await response.json()

    setDishes([...dishes, newDishFormPayload])
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
