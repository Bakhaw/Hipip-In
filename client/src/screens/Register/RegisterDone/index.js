import React from "react";
import Button from "../../../components/Button";
import { withContext } from "../../../context/Register";

function RegisterDone({ contextActions, contextState, history }) {
  const { firstname, email, password } = contextState.registerForm;

  async function handleEnterClickButton() {
    await contextActions.logIn(email.value, password.value);
    history.replace("/");
  }

  return (
    <div className="RegisterDone">
      <h1 className="RegisterDone__title">Bienvenue {firstname.value}</h1>
      <p className="RegisterDone__text-confirmation">
        Votre compte à été créé !
      </p>
      <Button onClick={handleEnterClickButton} text="Entrer" />
    </div>
  );
}

export default withContext(RegisterDone);
