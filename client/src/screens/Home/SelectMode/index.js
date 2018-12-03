import React, { Component, Fragment } from "react";

import Button from "../../../components/Button";
import Random from "./Random";
import SelectPersons from "./SelectPersons";

class SelectMode extends Component {
  state = {
    selectedMode: null
  };

  selectMode = mode => {
    this.setState({ selectedMode: mode });
  };

  render() {
    const { selectedMode } = this.state;
    return (
      <div className="SelectMode">
        {selectedMode === null && (
          <Fragment>
            <Button onClick={() => this.selectMode("random")} text="Random" />
            <Button
              onClick={() => this.selectMode("je choisis")}
              text="Je choisis"
            />
          </Fragment>
        )}
        {selectedMode === "random" && <Random />}
        {selectedMode === "je choisis" && <SelectPersons />}
      </div>
    );
  }
}

export default SelectMode;
