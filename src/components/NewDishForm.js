import React, { useState, useEffect } from 'react';

import TextField from "./TextField"

const NewDishForm = (props) => {
  const [newDish, setNewDish] = useState({
    dishName: "",
    dishDescription: ""
  })

  const handleFieldChange = (event) => {
    let fieldName = event.currentTarget.name
    let userInput = event.currentTarget.value

    setNewDish({
      ...newDish,
      [fieldName]: userInput
    })
  }

  const handleDishSubmit = (event) => {
    event.preventDefault()

    props.addNewDish(newDish)
  }

  return(
    <div className='page border'>
      <h1>Add Your Favorite Dish</h1>
      
        <form onSubmit={handleDishSubmit}>
          <label> Name: </label>
            <input
              type="text"
              name="dishName"
              value={newDish.dishName}
              onChange={handleFieldChange}
            />

          <label> Description: </label>
            <input
              type="text"
              name="dishDescription"
              value={newDish.dishDescription}
              onChange={handleFieldChange}
            />        
          <input type="submit"/>
        </form>
    </div>
  )
}

export default NewDishForm;
