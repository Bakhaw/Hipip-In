import React from 'react';

import Avatar from '../../components/Avatar';
import Input from '../../components/Input';

const RegisterFormFields = [
  {
    label: 'Nom',
    name: 'lastname',
    type: 'text'
  },
  {
    label: 'Prénom',
    name: 'firstname',
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Mot de passe',
    name: 'password',
    type: 'password'
  },
  {
    label: 'Confimer le mot de passe',
    name: 'confirmPassword',
    type: 'password'
  }
];

function RegisterForm({ form, handleInputChange, selectGenre }) {
  return (
    <div className='RegisterForm'>
      {RegisterFormFields.map((field, index) => {
        const { label, name, type } = field;
        return (
          <Input
            key={index}
            label={label}
            name={name}
            onChange={handleInputChange}
            type={type}
            value={form[name]}
          />
        );
      })}

      <div className='RegisterForm__avatars'>
        <Avatar
          isActive={form.genre === 'boy'}
          onClick={() => selectGenre('boy')}
          text='Homme'
          type='boy'
        />
        <Avatar
          isActive={form.genre === 'girl'}
          onClick={() => selectGenre('girl')}
          text='Femme'
          type='girl'
        />
      </div>
    </div>
  );
}

export default RegisterForm;
