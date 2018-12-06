import React, { Component, createContext } from "react";
import axios from "axios";

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class AppStateProvider extends Component {
  state = {
    isAppLoading: false,
    isUserLogged: false,
    userLogged: {}
  };

  getUser = async () => {
    console.log("GET /auth/profile");
    const request = await axios.get("/auth/profile");
    const userLogged = request.data.user;
    const isUserLogged = userLogged === null ? false : true;
    this.setState({ isUserLogged, userLogged });
  };

  toggleAppLoading = async bool => {
    await this.setState({ isAppLoading: bool });
  };

  render() {
    const { isAppLoading, isUserLogged, userLogged } = this.state;
    return (
      <Provider
        value={{
          contextActions: {
            getUser: this.getUser,
            logIn: this.logIn,
            toggleAppLoading: this.toggleAppLoading
          },
          contextState: {
            isAppLoading,
            isUserLogged,
            userLogged
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
