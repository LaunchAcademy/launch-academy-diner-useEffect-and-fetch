import React, { useState, useEffect } from 'react';

const NewDishForm = (props) => {
  const [newDish, setNewDish] = useState({
    name: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    const fieldName = event.currentTarget.name
    const userInput = event.currentTarget.value

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

          <label> Name: 
            <input
              type="text"
              name="name"
              value={newDish.name}
              onChange={handleFieldChange}
            />
          </label>

      
          <label> Description: 
            <input
              type="text"
              name="description"
              value={newDish.description}
              onChange={handleFieldChange}
            />
          </label>
         
          <input type="submit"/>
        </form>
    </div>
  )
}

export default NewDishForm;
