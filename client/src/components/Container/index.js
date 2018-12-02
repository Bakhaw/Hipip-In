import React from 'react';

import Header from '../Header';

function Container({
  avatarType,
  children,
  headerTitle,
  sectionTitle,
  showAvatarHeader
}) {
  return (
    <div className='Container'>
      <Header
        showAvatarHeader={showAvatarHeader}
        title={headerTitle}
        type={avatarType}
      />
      <h1 className='Container__title'>{sectionTitle}</h1>
      <div className='Container__children'>{children}</div>
    </div>
  );
}

export default Container;
