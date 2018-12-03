import React from "react";
import ChevronDown from "../../../../assets/images/layout/chevron-down.svg";
import ChevronUp from "../../../../assets/images/layout/chevron-up.svg";

function DropdownButton({
  isDropdownOpen,
  selectedDropdownItem,
  toggleDropdown
}) {
  const chevron = isDropdownOpen ? ChevronUp : ChevronDown;

  const buttonHeaderStyle = {
    dropdownClose: {
      borderRadius: "20px"
    },
    dropdownOpen: {
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px"
    }
  };

  return (
    <button
      className="Random__button__header"
      style={
        isDropdownOpen
          ? buttonHeaderStyle.dropdownOpen
          : buttonHeaderStyle.dropdownClose
      }
      onClick={toggleDropdown}
    >
      <p className="Random__button__header__text">
        Nombre de participants: {selectedDropdownItem}
      </p>
      <img
        alt="Flèche vers le bas"
        className="Random__button__header__chevron"
        src={chevron}
      />
    </button>
  );
}

export default DropdownButton;
