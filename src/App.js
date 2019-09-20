import React, { useState, useEffect } from 'react';

import DishList from "./containers/DishList"
import NewDishForm from "./containers/NewDishForm"

const App = (props) => {
  const [dishes, setDishes] = useState([])

  const addNewDish = (newDishFormPayload) => {
      setDishes([...dishes, newDishFormPayload])
      // setDishes(dishes.concat(newlyCreatedDish))
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
