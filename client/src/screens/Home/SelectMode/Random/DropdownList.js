import React from "react";

function DropdownList({ selectDropdownItem }) {
  return (
    <ul className="Random__button__list">
      <li
        className="Random__button__list__item"
        onClick={() => selectDropdownItem(1)}
      >
        1
      </li>
      <li
        className="Random__button__list__item"
        onClick={() => selectDropdownItem(2)}
      >
        2
      </li>
      <li
        className="Random__button__list__item"
        onClick={() => selectDropdownItem(3)}
      >
        3
      </li>
    </ul>
  );
}

export default DropdownList;
