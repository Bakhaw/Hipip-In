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
    email: "",
    password: "",
    formError: false,
    errorMessage: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logIn = async () => {
    const {
      contextActions: { toggleAppLoading },
      history
    } = this.props;
    const { email, password } = this.state;
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);

    await toggleAppLoading(true);

    await axios({
      method: "post",
      data: params,
      url: "/auth/login"
    })
      .then(res => {
        const { message, success } = res.data;
        if (success) {
          // ? Login successful, clear errors
          this.setState({ formError: false, errorMessage: "" });
          history.replace("/");
        } else {
          // ? Generate error
          this.setState({ formError: true, errorMessage: message });
        }
      })
      .catch(err => console.log("ERREUR", err.data));

    await toggleAppLoading(false);
  };

  render() {
    const { errorMessage, formError } = this.state;
    const { isAppLoading } = this.props.contextState;

    if (isAppLoading) return <Spinner />;

    return (
      <div>
        {LoginFormFields.map((field, index) => {
          const { label, name, type } = field;
          return (
            <Input
              key={index}
              label={label}
              name={name}
              onChange={this.handleInputChange}
              type={type}
              value={this.state[name]}
            />
          );
        })}
        {formError && <p>{errorMessage}</p>}
        <Button onClick={this.logIn} text="Se connecter" />
      </div>
    );
  }
}

export default withContext(LoginForm);
