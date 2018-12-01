import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class AppStateProvider extends Component {
  state = {};
  render() {
    return <Provider value={{}}>{this.props.children}</Provider>;
  }
}
