import React, { Component, createContext } from "react";
import axios from "axios";

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class HomeProvider extends Component {
  state = {
    isAppLoading: false,
    isUserLogged: false,
    userLogged: {},
    selectedActivity: null,
    selectedMode: null,
    selectedPersons: []
  };

  toggleAppLoading = async bool => {
    await this.setState({ isAppLoading: bool });
  };

  getUser = async () => {
    console.log("GET /auth/profile");
    const request = await axios.get("/auth/profile");
    const userLogged = request.data.user;
    const isUserLogged = userLogged === null ? false : true;
    this.setState({ isUserLogged, userLogged });
  };

  handleSelectActivity = async selectedActivity => {
    await this.setState({ selectedActivity });
  };

  handleSelectMode = async selectedMode => {
    await this.setState({ selectedMode });
  };

  handleSelectPerson = async selectedPerson => {
    await this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedPersons.length === 0) {
        newState.selectedPersons.push(selectedPerson);
      } else {
        const itemIndex = newState.selectedPersons.findIndex(
          x => x.id === selectedPerson.id
        );

        if (itemIndex === -1) {
          newState.selectedPersons = [
            ...newState.selectedPersons,
            selectedPerson
          ];
        } else {
          newState.selectedPersons.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  render() {
    const {
      isAppLoading,
      isUserLogged,
      userLogged,
      selectedActivity,
      selectedMode,
      selectedPersons
    } = this.state;
    return (
      <Provider
        value={{
          contextActions: {
            handleSelectActivity: this.handleSelectActivity,
            handleSelectMode: this.handleSelectMode,
            handleSelectPerson: this.handleSelectPerson,
            getUser: this.getUser,
            toggleAppLoading: this.toggleAppLoading
          },
          contextState: {
            isAppLoading,
            isUserLogged,
            userLogged,
            selectedActivity,
            selectedMode,
            selectedPersons
          }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
