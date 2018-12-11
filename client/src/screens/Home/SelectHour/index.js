import React from "react";

import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";

const ListItems = [
  {
    text: "17:00"
  },
  {
    text: "18:00"
  },
  {
    text: "19:00"
  },
  {
    text: "20:00"
  }
];

function SelectHour() {
  return (
    <div className="SelectHour">
      <Dropdown listItems={ListItems} text="16:00" />
      <Button text="Valider" />
    </div>
  );
}

export default SelectHour;
