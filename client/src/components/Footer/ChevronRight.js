import React from "react";
import classNames from "classnames";
import ChevronRightIcon from "../../assets/images/layout/chevron-right.png";

function ChevronRight({ disabled, onClick, text }) {
  return (
    <div
      className={classNames(
        "Chevron",
        "Chevron__right",
        disabled && "Chevron__disabled"
      )}
      onClick={onClick}
    >
      <p className="Chevron__text">{text || "Suivant"}</p>
      <img
        alt="Bouton Suivant"
        className="Chevron__image"
        src={ChevronRightIcon}
      />
    </div>
  );
}

export default ChevronRight;
