import React from "react";
import { Link } from "react-router-dom";

function CreateAccountButton() {
  return (
    <p className="Login__create-account">
      Pas encore inscrit ?<br />
      <Link className="Login__create-account__button" to="/register">
        Créer un compte
      </Link>
    </p>
  );
}

export default CreateAccountButton;
