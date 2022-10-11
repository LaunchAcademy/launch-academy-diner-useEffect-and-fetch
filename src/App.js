import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const getDishes = async () => {
    try {
      const response = await fetch('/api/v1/dishes')
      // if conditional error handling
      const responseBody = await response.json()
      // debugger
      setDishes(responseBody)
    } catch(err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  }

  useEffect(() => {
    getDishes()
  }, [])

  const addNewDish = async (newDishFormPayload) => {
      // setDishes([...dishes, newDishFormPayload])
      // debugger
      try {
        const response = await fetch('/api/v1/dishes', {
          method: "POST",
          body: JSON.stringify(newDishFormPayload)
        })
        
        if (!response.ok) {
          const newError = new Error(`${response.status} ${response.statusText}`)
          throw(newError)
        }
        const responseBody = await response.json()
        // debugger
        setDishes([...dishes, responseBody])
        // const newDishesArray = dishes.concat(responseBody)
        // setDishes(newDishesArray)
    } catch(err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
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
