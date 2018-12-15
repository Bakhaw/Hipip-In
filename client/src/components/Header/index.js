import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import LogoFull from '../../assets/images/layout/hipipin-logo-full.png';
import LogoShort from '../../assets/images/layout/hipipin-logo-short.png';

function Header({ showAvatarHeader, title, type }) {
  if (showAvatarHeader) {
    return (
      <div className='AvatarHeader'>
        <Link to='/'>
          <img alt='Hipip In Logo' className='AvatarHeader__logo' src={LogoShort} />
        </Link>
        <Avatar isActive={true} size='small' type={type} />
      </div>
    );
  } else {
    return (
      <div className='Header'>
        <Link to='/'>
          <img alt='Hipip In Logo' className='Header__logo' src={LogoFull} />
        </Link>
        <h1 className='Header__title'>{title}</h1>
      </div>
    );
  }
}

export default Header;
