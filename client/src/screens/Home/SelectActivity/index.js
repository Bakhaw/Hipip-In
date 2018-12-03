import React, { Component } from "react";
const baseImgPath = "src/assets/images/activities";

const Activities = [
  {
    image: `${baseImgPath}/air.png`,
    text: "Prendre l'air"
  },
  {
    image: `${baseImgPath}/cafe.png`,
    text: "Prendre un café"
  },
  {
    image: `${baseImgPath}/dej.png`,
    text: "Pause déjeuner"
  }
];

class SelectActivity extends Component {
  state = {
    selectedActivity: ""
  };

  selectActivity = activity => {
    this.setState({ selectedActivity: activity.text });
  };

  render() {
    const { selectedActivity } = this.state;
    return (
      <div className="SelectActivity">
        <div className="SelectActivity__Activities">
          {Activities.map((activity, index) => {
            const { image, text } = activity;
            return (
              <div
                className={`SelectActivity__Activity ${
                  selectedActivity === text
                    ? "SelectActivity__Activity__active"
                    : ""
                }`}
                key={index}
                onClick={() => this.selectActivity(activity)}
              >
                <img
                  alt={`Icône ${text}`}
                  className="SelectActivity__Activity__image"
                  src={image}
                />
                <p className="SelectActivity__Activity__text">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SelectActivity;
