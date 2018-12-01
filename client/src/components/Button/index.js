import React from 'react';
import DoubleChevronRight from '../../assets/images/layout/double-chevron-right.png';

function Button({ onClick, text }) {
  return (
    <button className='Button' onClick={onClick}>
      <label className='Button__text'>{text}</label>
      <img
        alt='Icône bouton flèche suivant'
        className='Button__double-chevron-right '
        src={DoubleChevronRight}
      />
    </button>
  );
}

export default Button;
