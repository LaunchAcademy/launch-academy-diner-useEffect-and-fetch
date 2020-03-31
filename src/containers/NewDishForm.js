import React, { useState, useEffect } from 'react';

const NewDishForm = (props) => {
  const [newDish, setNewDish] = useState({
    dishName: "",
    dishDescription: ""
  })

  const handleFieldChange = (event) => {
    setNewDish({
      ...newDish,
      [event.currentTarget.name]: event.currentTarget.value
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
