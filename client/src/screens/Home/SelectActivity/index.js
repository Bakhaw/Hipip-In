import React, { Component } from 'react';
import { withContext } from '../../../context/Home';

const baseImgPath = 'src/assets/images/activities';

const Activities = [
  {
    image: `${baseImgPath}/air.png`,
    text: "Prendre l'air",
  },
  {
    image: `${baseImgPath}/cafe.png`,
    text: 'Prendre un café',
  },
  {
    image: `${baseImgPath}/dej.png`,
    text: 'Pause déjeuner',
  },
];

function SelectActivity({
  contextActions: { handleSelectActivity },
  contextState: { selectedActivity },
}) {
  return (
    <div className='SelectActivity'>
      <div className='SelectActivity__Activities'>
        {Activities.map((activity, index) => {
          const { image, text } = activity;
          const isActive = selectedActivity && selectedActivity.text === text;
          return (
            <div
              className={`SelectActivity__Activity ${
                isActive ? 'SelectActivity__Activity__active' : ''
              }`}
              key={index}
              onClick={() => handleSelectActivity(activity)}
            >
              <img
                alt={`Icône ${text}`}
                className='SelectActivity__Activity__image'
                src={image}
              />
              <p className='SelectActivity__Activity__text'>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withContext(SelectActivity);
