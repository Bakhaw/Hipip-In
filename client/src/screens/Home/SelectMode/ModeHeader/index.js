import React from 'react';
import DoubleChevronRight from '../../../../assets/images/layout/double-chevron-right.png';

function ModeHeader({ mode }) {
  return (
    <div className='ModeHeader'>
      <img alt='Chevron Icône' className='ModeHeader__image' src={DoubleChevronRight} />
      <p className='ModeHeader__text'>{mode}</p>
    </div>
  );
}

export default ModeHeader;
