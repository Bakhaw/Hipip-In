import React, { Component, Fragment } from "react";

import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Random from "./SelectMode/Random";
import SelectActivity from "./SelectActivity";
import SelectHour from "./SelectHour";
import SelectMode from "./SelectMode";
import SelectPersons from "./SelectMode/SelectPersons";
import Spinner from "../../components/Spinner";

import StepDetail from "./StepDetail";
// * [ PARAMETERS ], EXAMPLE:
// ? StepDetail(
// ? component
// ? chevronRight
// ? chevronLeft
// ? nextStep
// ? prevStep
// ? sectionTitle
// ? )

import { withContext } from "../../context";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 0,
      selectedMode: "",
      StepsDetail: [
        StepDetail(
          <SelectActivity />, // ? component
          true, // ? chevronRight
          false, // ? chevronLeft
          this.nextStep, // ? nextStep
          null, // ? prevStep
          "Tu veux faire quoi ?" // ? sectionTitle
        ),
        StepDetail(
          <SelectMode
            goToRandomStep={this.goToRandomStep}
            goToSelectPersonsStep={this.goToSelectPersonsStep}
          />,
          false,
          true,
          null,
          this.prevStep,
          "Avec qui ?"
        ),
        StepDetail(
          <Random />,
          true,
          true,
          this.goToSelectHour,
          this.prevStep,
          ""
        ),
        StepDetail(
          <SelectPersons />,
          true,
          true,
          this.nextStep,
          this.goToSelectMode,
          ""
        ),
        StepDetail(
          <SelectHour />,
          false,
          true,
          null,
          this.goToSelectMode,
          "Quand ?"
        )
      ]
    };
  }

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
    const { currentStep, StepsDetail } = this.state;
    const { isAppLoading, isUserLogged, userLogged } = this.props.contextState;
    const { component, navigation, sectionTitle } = StepsDetail[currentStep];

    if (isAppLoading) return <Spinner />;

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
