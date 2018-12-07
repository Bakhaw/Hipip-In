import React, { Component, createContext } from "react";
import axios from "axios";

import RegisterFormState from "./RegisterFormState";

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class RegisterProvider extends Component {
  state = {
    canSubmit: false,
    registerForm: RegisterFormState,
    selectedHobbies: []
  };

  logIn = async (email, password) => {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);

    await axios({
      data: params,
      method: "post",
      url: "/auth/login"
    })
      .then(res => console.log("POST /login", res.data))
      .catch(err => console.log(err));
  };

  handleSelectItem = async item => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedHobbies.length === 0) {
        newState.selectedHobbies.push(item);
      } else {
        const itemIndex = newState.selectedHobbies.findIndex(
          x => x.id === item.id
        );

        if (itemIndex === -1) {
          newState.selectedHobbies = [...newState.selectedHobbies, item];
        } else {
          newState.selectedHobbies.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  checkFormErrors = key => {
    switch (key) {
      case "email":
        this.checkEmailErrors();
        break;
      case "password":
        this.checkPasswordErrors();
        break;
      case "confirmPassword":
        this.checkPasswordErrors();
        break;
      default:
        break;
    }

    let canSubmit;
    Object.entries(this.state.registerForm).map(item => {
      const { error, value } = item[1];
      if (error === null) return;
      if (error === true) return this.setState({ canSubmit: false });

      if (error !== true && value !== "") {
        canSubmit = true;
      } else {
        canSubmit = false;
      }
    });

    return this.setState({ canSubmit });
  };

  toggleFormFieldError = errorObj => {
    const { error, message, key } = errorObj;
    return {
      ...this.state.registerForm[key],
      error,
      message
    };
  };

  checkPasswordErrors = async () => {
    const { registerForm } = this.state;
    const { confirmPassword, password } = registerForm;

    if (confirmPassword.value === "" || password.value === "") return;

    let errorObj;

    if (confirmPassword.value !== password.value) {
      errorObj = key => ({
        error: true,
        message: "Les mots de passe doivent correspondre",
        key
      });
    } else {
      errorObj = key => ({
        error: false,
        message: "Mots de passe valides",
        key
      });
    }

    const newState = {
      registerForm: {
        ...registerForm,
        confirmPassword: this.toggleFormFieldError(errorObj("confirmPassword")),
        password: this.toggleFormFieldError(errorObj("password"))
      }
    };
    return this.setState(newState);
  };

  checkEmailErrors = async () => {
    const { registerForm } = this.state;
    const { value } = registerForm.email;

    if (value === "") return;

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = regex.test(String(value).toLowerCase());

    if (!isEmailValid)
      return this.setState({
        registerForm: {
          ...registerForm,
          email: this.toggleFormFieldError({
            error: true,
            message: "Email invalide",
            key: "email"
          })
        }
      });

    const params = new URLSearchParams();
    params.append("email", value);

    await axios({
      data: params,
      method: "post",
      url: "/auth/checkIfUserExists"
    })
      .then(res => {
        const { error, message } = res.data;
        const newState = {
          registerForm: {
            ...registerForm,
            email: this.toggleFormFieldError({
              error,
              message,
              key: "email"
            })
          }
        };
        return this.setState(newState);
      })
      .catch(err => console.log(err));
  };

  handleRegisterFormInputChange = ({ target: { name, value } }) => {
    const { registerForm } = this.state;
    this.setState({
      registerForm: {
        ...registerForm,
        [name]: {
          ...registerForm[name],
          value
        }
      }
    });
  };

  handleRegisterFormSelectGenre = genre => {
    const { registerForm } = this.state;
    this.setState({
      registerForm: {
        ...registerForm,
        genre: {
          ...registerForm.genre,
          value: genre
        }
      }
    });
  };

  render() {
    const { canSubmit, registerForm, selectedHobbies } = this.state;
    console.log(registerForm);
    return (
      <Provider
        value={{
          contextActions: {
            checkFormErrors: this.checkFormErrors,
            handleRegisterFormInputChange: this.handleRegisterFormInputChange,
            handleRegisterFormSelectGenre: this.handleRegisterFormSelectGenre,
            handleSelectItem: this.handleSelectItem,
            logIn: this.logIn
          },
          contextState: {
            canSubmit,
            registerForm,
            selectedHobbies
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
