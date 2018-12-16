import React from 'react';
import Random from './SelectMode/Random';
import SelectActivity from './SelectActivity';
import SelectHour from './SelectHour';
import SelectMode from './SelectMode';
import SelectPersons from './SelectMode/SelectPersons';

const StepsDetails = ({
  goToRandomStep,
  goToSelectHour,
  goToSelectMode,
  goToSelectPersonsStep,
  nextStep,
  prevStep,
  props: {
    contextState: { selectedActivity, selectedPersons, selectedMode },
  },
}) => [
  {
    component: <SelectActivity />,
    navigation: {
      chevronRight: true,
      chevronRightDisabled: selectedActivity === null,
      chevronLeft: false,
      nextStep: nextStep,
      prevStep: null,
    },
    sectionTitle: 'Tu veux faire quoi ?',
  },
  {
    component: (
      <SelectMode
        goToRandomStep={goToRandomStep}
        goToSelectPersonsStep={goToSelectPersonsStep}
      />
    ),
    navigation: {
      chevronRight: false,
      chevronLeft: true,
      nextStep: null,
      prevStep: prevStep,
    },
    sectionTitle: 'Avec qui ?',
  },
  {
    component: <Random />,
    navigation: {
      chevronRight: true,
      chevronLeft: true,
      nextStep: goToSelectHour,
      prevStep: prevStep,
    },
    sectionTitle: '',
  },
  {
    component: <SelectPersons />,
    navigation: {
      chevronRight: true,
      chevronRightDisabled: selectedPersons.length === 0,
      chevronLeft: true,
      nextStep: nextStep,
      prevStep: goToSelectMode,
    },
    sectionTitle: '',
  },
  {
    component: <SelectHour />,
    navigation: {
      chevronRight: false,
      chevronLeft: true,
      nextStep: null,
      prevStep: selectedMode === 'random' ? goToRandomStep : goToSelectPersonsStep,
    },
    sectionTitle: 'Quand ?',
  },
];

export default StepsDetails;
