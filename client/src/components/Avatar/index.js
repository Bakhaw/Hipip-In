import React from 'react';

import Boy from '../../assets/images/users/boy.png';
import Girl from '../../assets/images/users/girl.png';

// TODO make Avatar selectable when user hit "Enter"
function Avatar({ isActive, onClick, size, text, type }) {
  const enterPressed = event => {
    const code = event.keyCode || event.which;
    if (code === 13) {
      // 13 is the enter keycode
      onClick();
    }
  };

  return (
    <div
      className={`Avatar ${isActive ? 'Avatar__active' : ''}`}
      role='button'
      tabIndex={0}
    >
      <img
        alt='Avatar'
        className={` Avatar__image ${size === 'small' && 'Avatar__small'}`}
        onClick={onClick}
        onKeyUp={enterPressed}
        src={type === 'boy' ? Boy : Girl}
      />
      <p className='Avatar__text'>{text}</p>
    </div>
  );
}

export default Avatar;
