import React from "react";

import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

import { withContext } from "../../context/Register";

function Footer({
  chevronLeft,
  chevronLeftDisabled,
  chevronLeftText,
  chevronRight,
  chevronRightDisabled,
  chevronRightText,
  contextState: { canSubmit },
  nextStep,
  prevStep
}) {
  return (
    <div className="Footer">
      {chevronLeft && (
        <ChevronLeft
          disabled={
            chevronLeftDisabled !== undefined ? chevronLeftDisabled : !canSubmit
          }
          onClick={prevStep}
          text={chevronLeftText}
        />
      )}
      {chevronRight && (
        <ChevronRight
          disabled={chevronRightDisabled || !canSubmit}
          onClick={nextStep}
          text={chevronRightText}
        />
      )}
    </div>
  );
}

export default withContext(Footer);
