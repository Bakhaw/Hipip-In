function StepDetail(
  component,
  chevronRight,
  chevronLeft,
  nextStep,
  prevStep,
  sectionTitle
) {
  return {
    component,
    navigation: {
      nextStep,
      prevStep,
      chevronRight,
      chevronLeft
    },
    sectionTitle
  };
}

export default StepDetail;
