import React, { Component } from "react";
import axios from "axios";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Spinner from "../../../components/Spinner";

import { withContext } from "../../../context";

const LoginFormFields = [
  {
    label: "Email",
    name: "email",
    type: "email"
  },
  {
    label: "Mot de passe",
    name: "password",
    type: "password"
  }
];

class LoginForm extends Component {
  state = {
    email: {
      error: null,
      value: ""
    },
    password: {
      error: null,
      value: ""
    }
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value
      }
    });
  };

  logIn = async () => {
    const {
      contextActions: { toggleAppLoading },
      history
    } = this.props;
    const { email, password } = this.state;
    const params = new URLSearchParams();
    params.append("email", email.value);
    params.append("password", password.value);

    await toggleAppLoading(true);

    await axios({
      method: "post",
      data: params,
      url: "/auth/login"
    })
      .then(res => {
        const { message, success } = res.data;
        console.log({ message, success });

        if (success) {
          // TODO Login successful, clear errors
          history.replace("/");
        } else {
          const errorObj = (key, error, message) => ({
            [key]: {
              ...this.state[key],
              error,
              message
            }
          });
          // ? Generate message
          if (message === "email valid password error") {
            this.setState({
              email: {
                ...this.state.email,
                error: false,
                message: "Email valide"
              },
              password: {
                ...this.state.password,
                error: true,
                message: "Mot de passe incorrect"
              }
            });
          }
          if (message === "email error") {
            this.setState({
              email: {
                ...this.state.email,
                error: true,
                message: "Email incorrect"
              }
            });
          }
        }
      })
      .catch(err => console.log("ERREUR", err.data));

    await toggleAppLoading(false);
  };

  render() {
    const { email, errorMessage, formError, password } = this.state;
    const { isAppLoading } = this.props.contextState;
    const isButtonDisabled = email.value === "" || password.value === "";

    if (isAppLoading) return <Spinner />;

    return (
      <div className="LoginForm">
        <div>
          {LoginFormFields.map((field, index) => {
            const { label, name, type } = field;
            return (
              <Input
                key={index}
                error={this.state[name].error}
                message={this.state[name].message}
                label={label}
                name={name}
                onChange={this.handleInputChange}
                type={type}
                value={this.state[name].value}
              />
            );
          })}
        </div>
        <Button
          disabled={isButtonDisabled}
          onClick={this.logIn}
          text="Se connecter"
        />
      </div>
    );
  }
}

export default withContext(LoginForm);
