import React from 'react';
import ListItem from './ListItem';

function List({ listItems, selectDropdownItem }) {
  return (
    <ul className='Dropdown__list'>
      {listItems.map((item, index) => (
        <ListItem
          key={index}
          onClick={() => selectDropdownItem(item.text)}
          text={item.text}
        />
      ))}
    </ul>
  );
}

export default List;
