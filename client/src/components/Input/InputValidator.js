import React, { Fragment } from "react";
import errorImg from "../../assets/images/layout/error.svg";
import validImg from "../../assets/images/layout/valid.svg";

function InputValidator({ error, message }) {
  return (
    <Fragment>
      {error === true && (
        <div className="Input__error__container">
          <img
            alt="Icône erreur"
            className="Input__error__image"
            src={errorImg}
          />
          <p className="Input__error__text">{message}</p>
        </div>
      )}
      {error === false && (
        <div className="Input__valid__container">
          <img
            alt="Icône valide"
            className="Input__valid__image"
            src={validImg}
          />
          <p className="Input__valid__text">{message}</p>
        </div>
      )}
    </Fragment>
  );
}

export default InputValidator;
