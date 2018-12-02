import React, { Component, Fragment } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import SelectActivity from './SelectAtivity';
import SelectMode from './SelectMode';
import Spinner from '../../components/Spinner';

import { withContext } from '../../context';

const StepsInfos = [
  {
    component: <SelectActivity />,
    sectionTitle: 'Tu veux faire quoi ?'
  },
  {
    component: <SelectMode />,
    sectionTitle: 'Avec qui ?'
  },
  {
    sectionTitle: 'Quand ?'
  }
];

class Home extends Component {
  state = {
    currentStep: 2
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

  render() {
    const { currentStep } = this.state;
    const { isAppLoading, isUserLogged, userLogged } = this.props.contextState;

    if (isAppLoading) return <Spinner />;

    return (
      <Fragment>
        <Container
          avatarType={isUserLogged && userLogged.genre}
          sectionTitle={StepsInfos[currentStep - 1].sectionTitle}
          showAvatarHeader={true}
        >
          {StepsInfos[currentStep - 1].component}
        </Container>
        <Footer
          chevronLeft={currentStep > 1}
          chevronRight={currentStep !== 2}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
      </Fragment>
    );
  }
}

export default withContext(Home);
