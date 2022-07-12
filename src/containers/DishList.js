import React from 'react';

import DishTile from '../components/DishTile';

const DishList = (props) => {



  const dishTiles = props.dishes.map(dish => {
    return(
      <DishTile
        key={dish.id}
        name={dish.name}
        description={dish.description}
      />
    )
  })

  return(
    <div className='page border'>
      <h1>Dish List</h1>
      <div className='dish-list'>
        {dishTiles}
      </div>
    </div>
  )
}

export default DishList;
