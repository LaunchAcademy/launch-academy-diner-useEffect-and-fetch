import React from 'react';

const TextField = props => {

  return(
    <input
      type="text"
      name={props.fieldName}
      value={props.content}
      onChange={props.handleChange}
    />
  )
}

export default TextField;
