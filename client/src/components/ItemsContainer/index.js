import React from "react";

import { withContext } from "../../context/Register";

function ItemsContainer({
  contextActions: { handleSelectItem },
  contextState: { selectedHobbies },
  items
}) {
  return (
    <div className="ItemsContainer">
      {items.map((item, index) => {
        const { id, image, text } = item;
        const selectedItemsIds = selectedHobbies.map(item => item.id);
        let isItemActive = selectedItemsIds.includes(id);
        return (
          <div
            className={`Item ${isItemActive ? "Item__active" : null}`}
            key={index}
          >
            <img
              alt={`image ${text}`}
              className="Item__image"
              onClick={() => handleSelectItem(item)}
              src={image}
            />
            <p className="Item__text">{text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default withContext(ItemsContainer);
