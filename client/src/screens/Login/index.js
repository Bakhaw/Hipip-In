import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import LoginForm from './LoginForm';

function Login() {
  return (
    <Container headerTitle='Connexion'>
      <div className='Login'>
        <LoginForm />
        <p className='Login__create-account'>
          Pas encore inscrit ?{' '}
          <Link className='Login__create-account__button' to='/register'>
            Créer un compte
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Login;
