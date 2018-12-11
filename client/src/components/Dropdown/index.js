import React, { Component } from "react";

import DropdownButton from "./DropdownButton";
import List from "./List";

class Dropdown extends Component {
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
    const { listItems, text } = this.props;
    return (
      <div className="Dropdown">
        <DropdownButton
          isDropdownOpen={isDropdownOpen}
          selectedDropdownItem={selectedDropdownItem}
          text={text}
          toggleDropdown={this.toggleDropdown}
        />
        {isDropdownOpen && (
          <List
            listItems={listItems}
            selectDropdownItem={this.selectDropdownItem}
          />
        )}
      </div>
    );
  }
}

export default Dropdown;
