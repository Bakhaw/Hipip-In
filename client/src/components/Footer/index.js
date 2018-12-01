import React from 'react';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';

function Footer({ chevronLeft, chevronRight, nextStep, prevStep }) {
  return (
    <div className='Footer'>
      {chevronLeft && <ChevronLeft onClick={prevStep} />}
      {chevronRight && <ChevronRight onClick={nextStep} />}
    </div>
  );
}

export default Footer;
