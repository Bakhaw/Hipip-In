import React from 'react';

import Button from '../../../components/Button';

import { withContext } from '../../../context/Home';

function SelectMode({
  contextActions: { handleSelectMode },
  goToRandomStep,
  goToSelectPersonsStep,
}) {
  async function selectRandom() {
    await handleSelectMode('random');
    goToRandomStep();
  }

  async function selectPerson() {
    await handleSelectMode('je choisis');
    goToSelectPersonsStep();
  }

  return (
    <div className='SelectMode'>
      <Button onClick={selectRandom} text='Random' />
      <Button onClick={selectPerson} text='Je choisis' />
    </div>
  );
}

export default withContext(SelectMode);
