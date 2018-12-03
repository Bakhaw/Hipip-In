import React from "react";

import Avatar from "../../../components/Avatar";
import Input from "../../../components/Input";
import RegisterFormFields from "./RegisterFormFields";

import { withContext } from "../../../context";

function RegisterForm({ contextActions, contextState: { registerForm } }) {
  const {
    handleRegisterFormInputChange,
    handleRegisterFormSelectGenre
  } = contextActions;
  return (
    <div className="RegisterForm">
      {RegisterFormFields.map((field, index) => {
        const { label, name, type } = field;
        return (
          <Input
            key={index}
            label={label}
            name={name}
            onChange={handleRegisterFormInputChange}
            type={type}
            value={registerForm[name]}
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
