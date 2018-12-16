import React, { Component, Fragment } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import StepsDetails from './StepsDetails';
import Spinner from '../../components/Spinner';

import { withContext } from '../../context/Home';

class Home extends Component {
  state = {
    currentStep: 0,
  };

  async componentDidMount() {
    await this.getUserOnMount().then(() => {
      const { contextState, history } = this.props;
      const { isAppLoading, isUserLogged } = contextState;

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

  nextStep = () => {
    this.setState(state => ({ currentStep: state.currentStep + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ currentStep: state.currentStep - 1 }));
  };

  goToSelectMode = () => {
    this.setState({ currentStep: 1 });
  };

  goToRandomStep = () => {
    this.setState({ currentStep: 2 });
  };

  goToSelectPersonsStep = () => {
    this.setState({ currentStep: 3 });
  };

  goToSelectHour = () => {
    this.setState({ currentStep: 4 });
  };

  render() {
    const { currentStep } = this.state;
    const { isUserLogged, userLogged } = this.props.contextState;
    const { component, navigation, sectionTitle } = StepsDetails(this)[currentStep];

    return (
      <Fragment>
        <Container
          avatarType={isUserLogged && userLogged.genre}
          sectionTitle={sectionTitle}
          showAvatarHeader={true}
        >
          {component}
        </Container>
        <Footer {...navigation} />
      </Fragment>
    );
  }
}

export default withContext(Home);
