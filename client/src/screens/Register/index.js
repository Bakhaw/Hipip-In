import React, { Component, Fragment } from 'react';

import Container from '../../components/Container';
import Footer from '../../components/Footer';
import RegisterDone from './RegisterDone';
import RegisterForm from './RegisterForm';
import RegisterHobbies from './RegisterHobbies';

class Register extends Component {
  state = {
    currentStep: 1,
    totalSteps: 3,
    form: {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
      confirmPassword: '',
      genre: ''
    }
  };

  handleInputChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  selectGenre = genre => {
    this.setState({
      form: {
        ...this.state.form,
        genre
      }
    });
  };

  nextStep = () => {
    this.setState(state => ({ currentStep: state.currentStep + 1 }));
  };

  prevStep = () => {
    this.setState(state => ({ currentStep: state.currentStep - 1 }));
  };

  goToRegisterDone = () => {
    this.setState({ currentStep: 3 });
  };

  render() {
    const { currentStep, form, totalSteps } = this.state;
    const { history } = this.props;
    return (
      <Fragment>
        <Container
          avatarType={form.genre}
          headerTitle='Inscription'
          sectionTitle={currentStep === 2 ? "Centres d'intérêts" : ''}
          showAvatarHeader={currentStep === 3}
        >
          <div className='Register'>
            {currentStep === 1 && (
              <RegisterForm
                handleInputChange={this.handleInputChange}
                form={form}
                selectGenre={this.selectGenre}
              />
            )}
            {currentStep === 2 && (
              <RegisterHobbies
                form={form}
                goToRegisterDone={this.goToRegisterDone}
              />
            )}
            {currentStep === 3 && (
              <RegisterDone form={form} history={history} />
            )}
          </div>
        </Container>
        <Footer
          chevronLeft={currentStep > 1 && currentStep < totalSteps}
          chevronRight={currentStep < 2}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        />
      </Fragment>
    );
  }
}

export default Register;
