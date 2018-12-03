import React from "react";
import ChevronLeftIcon from "../../assets/images/layout/chevron-left.png";

function ChevronLeft({ onClick }) {
  return (
    <div className="Chevron Chevron__left" onClick={onClick}>
      <img
        alt="Bouton Retour"
        className="Chevron__image"
        src={ChevronLeftIcon}
      />
      <p>Précédent</p>
    </div>
  );
}

export default ChevronLeft;
