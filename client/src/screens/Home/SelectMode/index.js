import React from "react";

import Button from "../../../components/Button";

function SelectMode({ goToRandomStep, goToSelectPersonsStep }) {
  return (
    <div className="SelectMode">
      <Button onClick={goToRandomStep} text="Random" />
      <Button onClick={goToSelectPersonsStep} text="Je choisis" />
    </div>
  );
}

export default SelectMode;
