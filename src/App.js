import React, { useState, useEffect } from 'react';

import DishList from "./components/DishList"
import NewDishForm from "./components/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const fetchDishes = async () => {
    const response = await fetch("/api/v1/dishes")
    const parsedDishData = await response.json()
    // debugger
    setDishes(parsedDishData)
  }

  useEffect(() => {
    fetchDishes()
  }, [])


  const addNewDish = async (newDishFormPayload) => {
    // debugger

    const response = await fetch("/api/v1/dishes", {
      method: "POST",
      body: JSON.stringify(newDishFormPayload)
    })

    const parsedNewDish = await response.json()
    // debugger
    
    let newSetOfDishes = dishes.concat(parsedNewDish)
    setDishes(newSetOfDishes)
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
