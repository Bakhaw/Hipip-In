import React from 'react';

function Spinner() {
  return (
    <div className='Spinner'>
      <div className='lds-css ng-scope'>
        <div style={{ width: '100%', height: '100%' }} className='lds-ripple'>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default Spinner;
