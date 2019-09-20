import React from 'react';

import DishTile from '../components/DishTile';

const DishList = (props) => {

  let dishTiles = props.dishes.map(dish => {
    return(
      <DishTile
        key={dish.id}
        dish={dish}
      />
    )
  })

  return(
    <div className='page border'>
      <h1>Dish Index Container</h1>
      <div className='dish-list'>
        {dishTiles}
      </div>
    </div>
  )
}

export default DishList;
