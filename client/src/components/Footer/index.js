import React from "react";

import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

function Footer({
  chevronLeft,
  chevronLeftDisabled,
  chevronLeftText,
  chevronRight,
  chevronRightDisabled,
  chevronRightText,
  nextStep,
  prevStep
}) {
  return (
    <div className="Footer">
      {chevronLeft && (
        <ChevronLeft
          disabled={chevronLeftDisabled}
          onClick={prevStep}
          text={chevronLeftText}
        />
      )}
      {chevronRight && (
        <ChevronRight
          disabled={chevronRightDisabled}
          onClick={nextStep}
          text={chevronRightText}
        />
      )}
    </div>
  );
}

export default Footer;
