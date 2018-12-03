import React, { Component, Fragment } from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import RegisterDone from "./RegisterDone";
import RegisterForm from "./RegisterForm";
import RegisterHobbies from "./RegisterHobbies";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 2,
      StepsDetail: [
        {
          component: <RegisterForm />,
          sectionTitle: "Infos persos"
        },
        {
          component: (
            <RegisterHobbies goToRegisterDone={this.goToRegisterDone} />
          ),
          sectionTitle: "Centres d'intérêts"
        },
        {
          component: <RegisterDone history={props.history} />,
          sectionTitle: "Bienvenue"
        }
      ]
    };
  }

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
    const { currentStep, StepsDetail } = this.state;
    return (
      <Fragment>
        <Container
          headerTitle="Inscription"
          sectionTitle={StepsDetail[currentStep].sectionTitle}
          showAvatarHeader={currentStep === 2}
        >
          <div className="Register">{StepsDetail[currentStep].component}</div>
        </Container>
        <Footer
          chevronLeft={currentStep >= 1 && currentStep < 2}
          chevronRight={currentStep < 1}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
      </Fragment>
    );
  }
}

export default Register;
