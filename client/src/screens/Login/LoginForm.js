import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Spinner from '../../components/Spinner';

import { withContext } from '../../context';

const LoginFormFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email'
  },
  {
    label: 'Mot de passe',
    name: 'password',
    type: 'password'
  }
];

class LoginForm extends Component {
  state = {
    email: '',
    password: ''
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
    params.append('email', email);
    params.append('password', password);

    await toggleAppLoading(true);

    await axios({
      method: 'post',
      data: params,
      url: '/auth/login'
    })
      .then(res => history.replace('/'))
      .catch(err => console.log(err));

    await toggleAppLoading(false);
  };

  render() {
    const { isAppLoading } = this.props.contextState;

    if (isAppLoading) return <Spinner />;

    return (
      <div className='LoginForm'>
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
        <Button onClick={this.logIn} text='Se connecter' />
      </div>
    );
  }
}

export default withContext(LoginForm);
