import React from 'react';

function Input({ label, name, onChange, type, value }) {
  return (
    <div className='Input'>
      <label className='Input__label' htmlFor={`input-${name}`}>
        {label}
      </label>
      <input
        className='Input__input'
        id={`input-${name}`}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
}

export default Input;
