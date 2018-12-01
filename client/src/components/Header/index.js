import React from 'react';
import { Link } from 'react-router-dom';
import LogoFull from '../../assets/images/layout/hipipin-logo-full.png';

function Header({ title }) {
  return (
    <div className='Header'>
      <Link to='/'>
        <img alt='Hipip In Logo' className='Header__logo' src={LogoFull} />
      </Link>
      <h1 className='Header__title'>{title}</h1>
    </div>
  );
}

export default Header;
