import React from 'react';

const DishTile = props => {

  return(
    <div>
      <div className="callout">
        <h5> {props.name} </h5>
        <p> {props.description} </p>
      </div>
    </div>
  )
}

export default DishTile;
