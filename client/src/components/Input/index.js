import React from "react";
import classNames from "classnames";

function Input({
  error,
  errorMessage,
  label,
  name,
  onBlur,
  onChange,
  type,
  value
}) {
  return (
    <div className={classNames("Input", error && "Input__error")}>
      <label className="Input__label" htmlFor={`input-${name}`}>
        {label}
      </label>
      <input
        className="Input__input"
        id={`input-${name}`}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error && <p>{errorMessage}</p>}
    </div>
  );
}

export default Input;
