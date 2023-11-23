import React from 'react';

import './Card.css';

const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
    // this above {props.children} is used in child compoenent like in this, In the parent component, import the child component '<card>', but instead of invoking it with a self-closing tag, use an standard open/closing tag like we used in UserItem.js or in PlaceItem.js
  );
};

export default Card;
