import React from 'react';

const DishTile = props => {

  return(
    <div className="callout">
      <h5> {props.dish.dishName} </h5>
      <p> {props.dish.dishDescription} </p>
    </div>
  )
}

export default DishTile;
