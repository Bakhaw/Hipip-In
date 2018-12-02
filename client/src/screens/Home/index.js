import React, { Component } from 'react';

import Container from '../../components/Container';
import Spinner from '../../components/Spinner';
import { withContext } from '../../context';

class Home extends Component {
  async componentDidMount() {
    await this.getUserOnMount().then(() => {
      const { contextState, history } = this.props;
      const { isAppLoading, isUserLogged, userLogged } = contextState;

      if (!isAppLoading && !isUserLogged) {
        return history.push('/login');
      }
    });
  }

  getUserOnMount = async () => {
    const { contextActions } = this.props;
    const { getUser, toggleAppLoading } = contextActions;
    await toggleAppLoading(true);
    await getUser();
    await toggleAppLoading(false);
  };

  render() {
    const { isAppLoading, isUserLogged, userLogged } = this.props.contextState;

    if (isAppLoading) return <Spinner />;

    return (
      <Container
        avatarType={isUserLogged && userLogged.genre}
        showAvatarHeader={true}
      >
        <p>Home page</p>
      </Container>
    );
  }
}

export default withContext(Home);
