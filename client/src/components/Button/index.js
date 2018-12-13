import React from "react";
import classNames from "classnames";
import DoubleChevronRight from "../../assets/images/layout/double-chevron-right.png";

import Button from "@material-ui/core/Button";

function CustomButton({ disabled, onClick, text }) {
  return (
    <Button color="secondary" variant="outlined" href="#outlined-buttons">
      Link
    </Button>
    // <button
    //   className={classNames('Button', disabled && 'Button__disabled')}
    //   disabled={disabled}
    //   onClick={onClick}
    // >
    //   <label className='Button__text'>{text}</label>
    //   <img
    //     alt='Icône bouton flèche suivant'
    //     className='Button__double-chevron-right '
    //     src={DoubleChevronRight}
    //   />
    // </button>
  );
}

export default CustomButton;
