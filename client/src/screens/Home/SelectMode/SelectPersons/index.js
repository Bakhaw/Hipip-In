import React, { Fragment } from 'react';

import ModeHeader from '../ModeHeader';
import ItemsContainer from '../../../../components/ItemsContainer';
import Persons from './Persons';

import { withContext } from '../../../../context/Home';

function SelectPersons({
  contextActions: { handleSelectPerson },
  contextState: { selectedPersons },
}) {
  return (
    <Fragment>
      <ModeHeader mode='Je choisis' />
      <ItemsContainer
        items={Persons}
        handleSelectItem={handleSelectPerson}
        selectedItems={selectedPersons}
      />
    </Fragment>
  );
}

export default withContext(SelectPersons);
