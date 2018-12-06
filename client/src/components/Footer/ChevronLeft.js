import React from "react";
import classNames from "classnames";
import ChevronLeftIcon from "../../assets/images/layout/chevron-left.png";

function ChevronLeft({ disabled, onClick, text }) {
  return (
    <div
      className={classNames(
        "Chevron",
        "Chevron__left",
        disabled && "Chevron__disabled"
      )}
      onClick={onClick}
    >
      <img
        alt="Bouton Retour"
        className="Chevron__image"
        src={ChevronLeftIcon}
      />
      <p className="Chevron__text">{text || "Précédent"}</p>
    </div>
  );
}

export default ChevronLeft;
