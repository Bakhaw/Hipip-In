import React from "react";
import RegisterDone from "./RegisterDone";
import RegisterForm from "./RegisterForm";
import RegisterHobbies from "./RegisterHobbies";

const StepsDetails = ({
  goToRegisterDone,
  nextStep,
  prevStep,
  props: {
    contextState: { canSubmit },
    history
  }
}) => [
  {
    component: <RegisterForm />,
    navigation: {
      chevronRight: true,
      chevronRightDisabled: !canSubmit,
      chevronLeftDisabled: false,
      chevronLeft: true,
      chevronLeftDisabled: false,
      chevronLeftText: "Connexion",
      nextStep: nextStep,
      prevStep: () => history.replace("/login")
    },
    sectionTitle: "Infos persos"
  },
  {
    component: <RegisterHobbies goToRegisterDone={goToRegisterDone} />,
    navigation: {
      chevronRight: false,
      chevronLeft: true,
      nextStep: null,
      prevStep: prevStep
    },
    sectionTitle: "Centres d'intérêts"
  },
  {
    component: <RegisterDone history={history} />,
    navigation: {
      chevronRight: false,
      chevronLeft: false,
      nextStep: null,
      prevStep: null
    },
    sectionTitle: "Bievenue"
  }
];

export default StepsDetails;
