import React, { Fragment } from 'react';

import Container from '../../components/Container';
import CreateAccountButton from './CreateAccountButton';
import LoginForm from './LoginForm';

function Login({ history }) {
  return (
    <Fragment>
      <Container headerTitle='Connexion'>
        <div className='Login'>
          <LoginForm history={history} />
        </div>
      </Container>
      <CreateAccountButton />
    </Fragment>
  );
}

export default Login;
