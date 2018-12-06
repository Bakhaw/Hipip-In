import React from "react";

import Avatar from "../../../components/Avatar";
import Input from "../../../components/Input";
import RegisterFormFields from "./RegisterFormFields";

import { withContext } from "../../../context/Register";

function RegisterForm({ contextActions, contextState: { registerForm } }) {
  const {
    checkFormErrors,
    handleRegisterFormInputChange,
    handleRegisterFormSelectGenre
  } = contextActions;
  return (
    <div className="RegisterForm">
      {RegisterFormFields.map((field, index) => {
        const { label, name, type } = field;
        const { error, errorMessage, value } = registerForm[name];
        return (
          <Input
            key={index}
            error={error}
            errorMessage={errorMessage}
            label={label}
            name={name}
            onBlur={() => checkFormErrors(name)} // TODO
            onChange={handleRegisterFormInputChange}
            type={type}
            value={value}
          />
        );
      })}

      <div className="RegisterForm__avatars">
        <Avatar
          isActive={registerForm.genre === "boy"}
          onClick={() => handleRegisterFormSelectGenre("boy")}
          text="Homme"
          type="boy"
        />
        <Avatar
          isActive={registerForm.genre === "girl"}
          onClick={() => handleRegisterFormSelectGenre("girl")}
          text="Femme"
          type="girl"
        />
      </div>
    </div>
  );
}

export default withContext(RegisterForm);
