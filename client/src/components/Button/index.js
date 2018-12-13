import React from "react";
import classNames from "classnames";
import DoubleChevronRight from "../../assets/images/layout/double-chevron-right.png";

function Button({ disabled, onClick, text }) {
  return (
    <button
      className={classNames("Button", disabled && "Button__disabled")}
      disabled={disabled}
      onClick={onClick}
    >
      <label className="Button__text">{text}</label>
      <img
        alt="Icône bouton flèche suivant"
        className="Button__double-chevron-right "
        src={DoubleChevronRight}
      />
    </button>
  );
}

export default Button;
