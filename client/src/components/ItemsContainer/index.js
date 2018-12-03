import React, { Component } from "react";

class ItemsContainer extends Component {
  state = {
    selectedItems: []
  };

  selectItem = async item => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedItems.length === 0) {
        newState.selectedItems.push(item.text);
      } else {
        const itemIndex = newState.selectedItems.findIndex(
          x => x === item.text
        );

        if (itemIndex === -1) {
          newState.selectedItems = [...newState.selectedItems, item.text];
        } else {
          newState.selectedItems.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  render() {
    const { selectedItems } = this.state;
    const { items } = this.props;
    return (
      <div className="ItemsContainer">
        {items.map((item, index) => {
          const { image, text } = item;
          const isItemActive = selectedItems.includes(text);
          return (
            <div
              className={`Item ${isItemActive && "Item__active"}`}
              key={index}
            >
              <img
                alt={`image ${text}`}
                className="Item__image"
                onClick={() => this.selectItem(item)}
                src={image}
              />
              <p className="Item__text">{text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ItemsContainer;