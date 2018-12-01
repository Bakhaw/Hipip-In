import React from 'react';

import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

function RegisterDone({ form }) {
  const { firstname, genre } = form;
  return (
    <div className='RegisterDone'>
      <h1 className='RegisterDone__title'>Bienvenue {firstname}</h1>
      <Avatar isActive={true} type={genre} />
      <p className='RegisterDone__text-confirmation'>
        Votre compte à été créé !
      </p>
      <Button text='Entrer' />
    </div>
  );
}

export default RegisterDone;
