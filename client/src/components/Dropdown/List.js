import React from "react";
import ListItem from "./ListItem";

const ListItems = [
  {
    text: "1"
  },
  {
    text: "2"
  },
  {
    text: "3"
  },
  {
    text: "4"
  },
  {
    text: "5"
  },
  {
    text: "6"
  }
];

function List({ selectDropdownItem }) {
  return (
    <ul className="Dropdown__list">
      {ListItems.map((item, index) => (
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
