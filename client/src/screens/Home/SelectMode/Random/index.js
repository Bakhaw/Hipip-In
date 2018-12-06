import React from "react";

import Dropdown from "../../../../components/Dropdown";
import ModeHeader from "../ModeHeader";

function Random() {
  return (
    <div className="Random">
      <ModeHeader mode="Random" />
      <div className="Random__button">
        <Dropdown text="Nombre de participants:" />
      </div>
    </div>
  );
}

export default Random;
