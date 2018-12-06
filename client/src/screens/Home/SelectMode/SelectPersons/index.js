import React, { Fragment } from "react";

import ModeHeader from "../ModeHeader";
import ItemsContainer from "../../../../components/ItemsContainer";
import Persons from "./Persons";

function SelectPersons() {
  return (
    <Fragment>
      <ModeHeader mode="Je choisis" />
      <ItemsContainer items={Persons} />
    </Fragment>
  );
}

export default SelectPersons;
