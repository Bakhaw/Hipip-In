import React from "react";
import axios from "axios";

import Button from "../../../components/Button";
import Hobbies from "./Hobbies";
import ItemsContainer from "../../../components/ItemsContainer";

import { withContext } from "../../../context/Register";

function RegisterHobbies({
  contextActions: { handleSelectHobbie },
  contextState: { registerForm, selectedHobbies },
  goToRegisterDone
}) {
  async function submitRegister() {
    const { lastname, firstname, email, password, genre } = registerForm;
    const params = new URLSearchParams();

    params.append("lastname", lastname.value);
    params.append("firstname", firstname.value);
    params.append("email", email.value);
    params.append("password", password.value);
    params.append("genre", genre);
    params.append("hobbies", JSON.stringify(selectedHobbies));

    await axios({
      data: params,
      method: "post",
      url: "/auth/register"
    })
      .then(res => {
        if (res.data.success) {
          console.log(res.data);
          goToRegisterDone();
        } else {
          console.log(res.data);
        }
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="RegisterHobbies">
      <ItemsContainer
        items={Hobbies}
        handleSelectItem={handleSelectHobbie}
        selectedItems={selectedHobbies}
      />
      <Button onClick={submitRegister} text="Confirmer mon inscription" />
    </div>
  );
}

export default withContext(RegisterHobbies);
