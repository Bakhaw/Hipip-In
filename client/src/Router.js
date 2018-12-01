import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

class Router extends Component {
  state = {
    isUserLogged: false
  };

  async componentDidMount() {
    await this.getUser();
  }

  getUser = async () => {
    const request = await axios.get('/auth/profile');
    console.log('User:', request.data.user);
    const isUserLogged = request.data.user === null ? false : true;
    this.setState({ isUserLogged });
  };

  render() {
    const { isUserLogged } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/' component={isUserLogged ? Home : Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
