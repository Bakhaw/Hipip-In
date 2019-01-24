import React from 'react';

import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';

const ListItems = [
  {
    text: '12:00',
  },
  {
    text: '15:00',
  },
  {
    text: '16:00',
  },
  {
    text: '17:00',
  },
];

function SelectHour() {
  return (
    <div className='SelectHour'>
      <Dropdown listItems={ListItems} text='10:00' />
      <Button text='Valider' />
    </div>
  );
}

export default SelectHour;
