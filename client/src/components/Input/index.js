import React from 'react';
import classNames from 'classnames';
import InputValidator from './InputValidator';

function Input({
  error,
  message,
  label,
  name,
  onBlur,
  placeholder,
  onChange,
  type,
  value,
}) {
  return (
    <div
      className={classNames(
        'Input',
        error === true && 'Input__error',
        error === false && 'Input__valid'
      )}
    >
      <label className='Input__label' htmlFor={`input-${name}`}>
        {label}
      </label>
      <div className='Input__row'>
        <input
          className='Input__row__input'
          id={`input-${name}`}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        <InputValidator error={error} message={message} />
      </div>
    </div>
  );
}

export default Input;
