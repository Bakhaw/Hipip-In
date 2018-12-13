import React, { Fragment } from "react";
import classNames from "classnames";
import DoubleChevronRight from "../../assets/images/layout/double-chevron-right.png";

import Fab from "@material-ui/core/Fab";

function CustomButton({ disabled, onClick, text }) {
  return (
    <Fragment>
      <Fab className="CustomButton" disabled={disabled} onClick={onClick}>
        <p>{text}</p>
        <img
          alt="Icône bouton flèche suivant"
          className={classNames(
            "CustomButton__icon",
            disabled && "CustomButton__icon__disabled"
          )}
          src={DoubleChevronRight}
        />
      </Fab>
    </Fragment>
  );
}

export default CustomButton;
