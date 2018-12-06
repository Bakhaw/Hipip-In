import React, { Component, createContext } from "react";
import axios from "axios";

import RegisterFormState from "./RegisterFormState";

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class RegisterProvider extends Component {
  state = {
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
        this.checkEmailErrors(key);
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
  };

  checkPasswordErrors = async () => {
    const { registerForm } = this.state;
    const { confirmPassword, password } = registerForm;

    if (confirmPassword.value === "" || password.value === "") return;

    let newState = {};

    if (confirmPassword.value !== password.value) {
      newState = {
        registerForm: {
          ...registerForm,
          confirmPassword: {
            ...registerForm.confirmPassword,
            error: true,
            errorMessage: "Les mots de passe doivent correspondre"
          },
          password: {
            ...registerForm.password,
            error: true,
            errorMessage: "Les mots de passe doivent correspondre"
          }
        }
      };
    } else {
      newState = {
        registerForm: {
          ...registerForm,
          confirmPassword: {
            ...registerForm.confirmPassword,
            error: false,
            errorMessage: ""
          },
          password: {
            ...registerForm.password,
            error: false,
            errorMessage: ""
          }
        }
      };
    }
    return this.setState(newState);
  };

  checkEmailErrors = async key => {
    console.log("check email");
    const { value } = this.state.registerForm[key];

    if (value === "") return;

    const params = new URLSearchParams();
    params.append("email", value);

    await axios({
      data: params,
      method: "post",
      url: "/auth/checkIfUserExists"
    })
      .then(res => {
        const { success } = res.data;
        let newState = {};

        if (!success) {
          newState = {
            registerForm: {
              ...this.state.registerForm,
              [key]: {
                ...this.state.registerForm[key],
                error: true,
                errorMessage: "Email déjà utilisé"
              }
            }
          };
        } else {
          newState = {
            registerForm: {
              ...this.state.registerForm,
              [key]: {
                ...this.state.registerForm[key],
                error: false,
                errorMessage: ""
              }
            }
          };
        }
        return this.setState(newState);
      })
      .catch(err => console.log(err));
  };

  handleRegisterFormInputChange = e => {
    this.setState({
      registerForm: {
        ...this.state.registerForm,
        [e.target.name]: {
          ...this.state.registerForm[e.target.name],
          value: e.target.value
        }
      }
    });
  };

  handleRegisterFormSelectGenre = genre => {
    this.setState({
      registerForm: {
        ...this.state.registerForm,
        genre
      }
    });
  };

  render() {
    const { registerForm, selectedHobbies } = this.state;
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
