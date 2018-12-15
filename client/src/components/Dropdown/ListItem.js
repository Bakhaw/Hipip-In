import React from 'react';

function ListItem({ onClick, text }) {
  return (
    <li className='Dropdown__list__item' onClick={onClick}>
      {text}
    </li>
  );
}

export default ListItem;
