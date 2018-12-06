import React from "react";

import ChevronDown from "../../assets/images/layout/chevron-down.svg";
import ChevronUp from "../../assets/images/layout/chevron-up.svg";

function DropdownButton({
  isDropdownOpen,
  selectedDropdownItem,
  text,
  toggleDropdown
}) {
  const buttonHeaderStyle = {
    dropdownClose: {
      borderRadius: "20px"
    },
    dropdownOpen: {
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px"
    }
  };

  const chevron = isDropdownOpen ? ChevronUp : ChevronDown;

  return (
    <button
      className="Dropdown__header"
      style={
        isDropdownOpen
          ? buttonHeaderStyle.dropdownOpen
          : buttonHeaderStyle.dropdownClose
      }
      onClick={toggleDropdown}
    >
      <p className="Dropdown__header__text">
        {text} {selectedDropdownItem}
      </p>
      <img
        alt="Flèche vers le bas"
        className="Dropdown__header__chevron"
        src={chevron}
      />
    </button>
  );
}

export default DropdownButton;
