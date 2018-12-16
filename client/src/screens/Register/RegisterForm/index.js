import React from 'react';

import Avatar from '../../../components/Avatar';
import Input from '../../../components/Input';
import RegisterFormFields from './RegisterFormFields';

import { withContext } from '../../../context/Register';

function RegisterForm({ contextActions, contextState: { registerForm } }) {
  const {
    checkFormErrors,
    handleRegisterFormInputChange,
    handleRegisterFormSelectGenre,
  } = contextActions;
  return (
    <div className='RegisterForm'>
      {RegisterFormFields.map((field, index) => {
        const { label, name, placeholder, type } = field;
        const { error, message, value } = registerForm[name];
        return (
          <Input
            key={index}
            error={error}
            label={label}
            message={message}
            name={name}
            onBlur={() => checkFormErrors(name)} // TODO
            onChange={handleRegisterFormInputChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        );
      })}

      <div className='RegisterForm__avatars'>
        <Avatar
          isActive={registerForm.genre.value === 'boy'}
          onClick={() => handleRegisterFormSelectGenre('boy')}
          text='Homme'
          type='boy'
        />
        <Avatar
          isActive={registerForm.genre.value === 'girl'}
          onClick={() => handleRegisterFormSelectGenre('girl')}
          text='Femme'
          type='girl'
        />
      </div>
    </div>
  );
}

export default withContext(RegisterForm);
