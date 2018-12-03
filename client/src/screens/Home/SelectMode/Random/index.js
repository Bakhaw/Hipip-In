import React, { Component } from "react";

import DropdownButton from "./DropdownButton";
import ModeHeader from "../ModeHeader";
import DropdownList from "./DropdownList";

class Random extends Component {
  state = {
    isDropdownOpen: false,
    selectedDropdownItem: null
  };

  toggleDropdown = () => {
    this.setState(state => ({ isDropdownOpen: !state.isDropdownOpen }));
  };

  selectDropdownItem = item => {
    this.setState({ selectedDropdownItem: item });
    this.toggleDropdown();
  };

  render() {
    const { isDropdownOpen, selectedDropdownItem } = this.state;

    return (
      <div className="Random">
        <ModeHeader mode="Random" />
        <div className="Random__button">
          <DropdownButton
            isDropdownOpen={isDropdownOpen}
            selectedDropdownItem={selectedDropdownItem}
            toggleDropdown={this.toggleDropdown}
          />
          {isDropdownOpen && (
            <DropdownList selectDropdownItem={this.selectDropdownItem} />
          )}
        </div>
      </div>
    );
  }
}

export default Random;
