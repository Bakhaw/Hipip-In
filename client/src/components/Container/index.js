import React from 'react';

import Header from '../Header';

function Container({ children, headerTitle, sectionTitle }) {
  return (
    <div className='Container'>
      <Header title={headerTitle} />
      <h1 className='Container__title'>{sectionTitle}</h1>
      <div className='Container__children'>{children}</div>
    </div>
  );
}

export default Container;
