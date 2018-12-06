import React from "react";
import ChevronRightIcon from "../../assets/images/layout/chevron-right.png";

function ChevronRight({ onClick, text }) {
  return (
    <div className="Chevron Chevron__right" onClick={onClick}>
      <p>{text || "Suivant"}</p>
      <img
        alt="Bouton Suivant"
        className="Chevron__image"
        src={ChevronRightIcon}
      />
    </div>
  );
}

export default ChevronRight;
