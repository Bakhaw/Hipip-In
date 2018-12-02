import React from 'react';

import Boy from '../../assets/images/layout/boy.png';
import Girl from '../../assets/images/layout/girl.png';

function Avatar({ isActive, onClick, size, text, type }) {
  return (
    <div className={`Avatar ${isActive ? 'Avatar__active' : ''}`}>
      <img
        alt='Avatar'
        className={` Avatar__image ${size === 'small' && 'Avatar__small'}`}
        onClick={onClick}
        src={type === 'boy' ? Boy : Girl}
      />
      <p className='Avatar__text'>{text}</p>
    </div>
  );
}

export default Avatar;
