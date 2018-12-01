import React from 'react';

import Boy from '../../assets/images/layout/boy.png';
import Girl from '../../assets/images/layout/girl.png';

function Avatar({ isActive, onClick, text, type }) {
  return (
    <div className={`Avatar ${isActive ? 'Avatar__active' : ''}`}>
      <img
        alt='Avatar'
        className='Avatar__image'
        onClick={onClick}
        src={type === 'boy' ? Boy : Girl}
      />
      <p className='Avatar__text'>{text}</p>
    </div>
  );
}

export default Avatar;
