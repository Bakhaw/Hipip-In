import React, { Component, Fragment } from 'react';

import Button from '../../components/Button';
import Random from './Random';
import SelectPersons from './SelectPersons';

const SelectModeInfos = [
  {
    component: <Random />
  },
  {
    component: <SelectPersons />
  }
];

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
      <div className='SelectMode'>
        {selectedMode === null ? (
          <Fragment>
            <Button onClick={() => this.selectMode(1)} text='Random' />
            <Button onClick={() => this.selectMode(2)} text='Je choisis' />
          </Fragment>
        ) : (
          SelectModeInfos[selectedMode - 1].component
        )}
      </div>
    );
  }
}

export default SelectMode;
