import React, { Component, Fragment } from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import StepsDetails from "./StepsDetails";

import { withContext } from "../../context/Register";

class Register extends Component {
  state = {
    currentStep: 0
  };

  nextStep = () => {
    this.setState(state => ({ currentStep: state.currentStep + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ currentStep: state.currentStep - 1 }));
  };

  goToRegisterDone = () => {
    this.setState({ currentStep: 2 });
  };

  render() {
    const { currentStep } = this.state;
    const { component, navigation, sectionTitle } = StepsDetails(this)[
      currentStep
    ];
    return (
      <Fragment>
        <Container
          headerTitle="Inscription"
          sectionTitle={sectionTitle}
          showAvatarHeader={currentStep === 2}
        >
          <div className="Register">{component}</div>
        </Container>
        <Footer {...navigation} />
      </Fragment>
    );
  }
}

export default withContext(Register);
