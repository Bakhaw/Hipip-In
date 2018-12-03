import React, { Component, Fragment } from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import SelectActivity from "./SelectActivity";
import SelectHour from "./SelectHour";
import SelectMode from "./SelectMode";
import Spinner from "../../components/Spinner";

import { withContext } from "../../context";

class Home extends Component {
  state = {
    currentStep: 1,
    StepsDetail: [
      {
        component: <SelectActivity />,
        sectionTitle: "Tu veux faire quoi ?"
      },
      {
        component: <SelectMode />,
        sectionTitle: "Avec qui ?"
      },
      {
        component: <SelectHour />,
        sectionTitle: "Quand ?"
      }
    ]
  };

  async componentDidMount() {
    await this.getUserOnMount().then(() => {
      const { contextState, history } = this.props;
      const { isAppLoading, isUserLogged } = contextState;

      if (!isAppLoading && !isUserLogged) {
        return history.push("/login");
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
    const { currentStep, StepsDetail } = this.state;
    const { isAppLoading, isUserLogged, userLogged } = this.props.contextState;

    if (isAppLoading) return <Spinner />;

    return (
      <Fragment>
        <Container
          avatarType={isUserLogged && userLogged.genre}
          sectionTitle={StepsDetail[currentStep].sectionTitle}
          showAvatarHeader={true}
        >
          {StepsDetail[currentStep].component}
        </Container>
        <Footer
          chevronLeft={currentStep > 0}
          chevronRight={currentStep !== 2}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
      </Fragment>
    );
  }
}

export default withContext(Home);
