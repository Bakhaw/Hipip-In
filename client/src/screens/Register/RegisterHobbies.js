import React, { Component } from 'react';
import axios from 'axios';

import Button from '../../components/Button';

const baseImgPath = 'src/assets/images/hobbies';

const Hobbies = [
  {
    image: `${baseImgPath}/bricolage.png`,
    text: 'Bricolage'
  },
  {
    image: `${baseImgPath}/cinema.png`,
    text: 'Cinéma'
  },
  {
    image: `${baseImgPath}/cuisine.png`,
    text: 'Cuisine'
  },
  {
    image: `${baseImgPath}/lecture.png`,
    text: 'Lecture'
  },
  {
    image: `${baseImgPath}/sport.png`,
    text: 'Sport'
  },
  {
    image: `${baseImgPath}/voyages.png`,
    text: 'Voyages'
  }
];

class RegisterHobbies extends Component {
  state = {
    hobbies: Hobbies,
    selectedHobbies: []
  };

  selectHobbie = hobbie => {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);

      if (newState.selectedHobbies.length === 0) {
        newState.selectedHobbies.push(hobbie.text);
      } else {
        const itemIndex = newState.selectedHobbies.findIndex(
          x => x === hobbie.text
        );

        if (itemIndex === -1) {
          newState.selectedHobbies = [...newState.selectedHobbies, hobbie.text];
        } else {
          newState.selectedHobbies.splice(itemIndex, 1);
        }
      }
      return newState;
    });
  };

  submitRegister = async () => {
    const { form, goToRegisterDone } = this.props;
    const { lastname, firstname, email, password, genre } = form;
    const params = new URLSearchParams();
    params.append('lastname', lastname);
    params.append('firstname', firstname);
    params.append('email', email);
    params.append('password', password);
    params.append('genre', genre);

    await axios({
      method: 'post',
      data: params,
      url: '/auth/register'
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    goToRegisterDone();
  };

  render() {
    const { hobbies, selectedHobbies } = this.state;
    return (
      <div>
        <div className='RegisterHobbies'>
          {hobbies.map((hobbie, index) => {
            const { image, text } = hobbie;
            const isHobbieActive = selectedHobbies.includes(text);
            return (
              <div
                className={`Hobbie ${isHobbieActive ? 'Hobbie__active' : ''}`}
                key={index}
              >
                <img
                  alt={`Hobbie ${text} Icône`}
                  className={`Hobbie__image `}
                  onClick={() => this.selectHobbie(hobbie)}
                  src={image}
                />
                <p className='Hobbie__text'>{text}</p>
              </div>
            );
          })}
        </div>
        <Button
          onClick={this.submitRegister}
          text='Confirmer mon inscription'
        />
      </div>
    );
  }
}

export default RegisterHobbies;
