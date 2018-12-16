import React from 'react';
import classNames from 'classnames';

import Spinner from '../Spinner';

function ItemsContainer({ handleSelectItem, isLoading, items, selectedItems }) {
  if (isLoading)
    return (
      <div className='ItemsContainer__Spinner'>
        <Spinner />
      </div>
    );

  return (
    <div className='ItemsContainer'>
      {items.map((item, index) => {
        const { _id, displayText, image } = item;
        const selectedItemsIds = selectedItems.map(item => item._id);
        let isItemActive = selectedItemsIds.includes(_id);
        return (
          <div
            className={classNames('Item', isItemActive && 'Item__active')}
            key={index}
            role='button'
          >
            <img
              alt={`image ${displayText}`}
              className='Item__image'
              onClick={() => handleSelectItem(item)}
              src={image}
            />
            <p className='Item__text'>{displayText}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsContainer;
