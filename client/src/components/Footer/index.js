import React from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

function Footer({
  chevronLeft,
  chevronLeftText,
  chevronRight,
  chevronRightText,
  nextStep,
  prevStep
}) {
  return (
    <div className="Footer">
      {chevronLeft && <ChevronLeft onClick={prevStep} text={chevronLeftText} />}
      {chevronRight && (
        <ChevronRight onClick={nextStep} text={chevronRightText} />
      )}
    </div>
  );
}

export default Footer;
