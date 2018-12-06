import React from "react";

import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";

function SelectHour() {
  return (
    <div className="SelectHour">
      <Dropdown text="16:10" />
      <Button text="Valider" />
    </div>
  );
}

export default SelectHour;
