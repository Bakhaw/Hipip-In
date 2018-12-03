import React from "react";
import ModeHeader from "../ModeHeader";
import ItemsContainer from "../../../../components/ItemsContainer";

const baseImgPath = "src/assets/images/layout";

const Persons = [
  {
    image: `${baseImgPath}/boy.png`,
    text: "John"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Jane"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Mary"
  },
  {
    image: `${baseImgPath}/boy.png`,
    text: "Bob"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Ruby"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Mary"
  },
  {
    image: `${baseImgPath}/boy.png`,
    text: "Bob"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Ruby"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Mary"
  },
  {
    image: `${baseImgPath}/boy.png`,
    text: "Bob"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Ruby"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Mary"
  },
  {
    image: `${baseImgPath}/boy.png`,
    text: "Bob"
  },
  {
    image: `${baseImgPath}/girl.png`,
    text: "Ruby"
  },
  {
    image: `${baseImgPath}/boy.png`,
    text: "Franz"
  }
];

function SelectPersons() {
  return (
    <div>
      <ModeHeader mode="Je choisis" />
      <ItemsContainer items={Persons} />
    </div>
  );
}

export default SelectPersons;
