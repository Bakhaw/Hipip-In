import React, { Component, createContext } from 'react';
import axios from 'axios';

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
    const request = await axios.get('/auth/profile');
    const userLogged = request.data.user;
    const isUserLogged = userLogged === null ? false : true;
    this.setState({ isUserLogged, userLogged });
  };

  logIn = async (email, password) => {
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    await axios({
      data: params,
      method: 'post',
      url: '/auth/login'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
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
