import React from 'react';

import Dropdown from '../../../../components/Dropdown';
import ModeHeader from '../ModeHeader';

const ListItems = [
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '4',
  },
];

function Random() {
  return (
    <div className='Random'>
      <ModeHeader mode='Random' />
      <div className='Random__button'>
        <Dropdown listItems={ListItems} text='Nombre de participants:' />
      </div>
    </div>
  );
}

export default Random;
