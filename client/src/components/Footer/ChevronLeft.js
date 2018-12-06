import React from "react";
import ChevronLeftIcon from "../../assets/images/layout/chevron-left.png";

function ChevronLeft({ onClick, text }) {
  return (
    <div className="Chevron Chevron__left" onClick={onClick}>
      <img
        alt="Bouton Retour"
        className="Chevron__image"
        src={ChevronLeftIcon}
      />
      <p>{text || "Précédent"}</p>
    </div>
  );
}

export default ChevronLeft;
