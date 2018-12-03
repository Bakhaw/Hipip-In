import React from "react";
import axios from "axios";

import Button from "../../../components/Button";
import Hobbies from "./Hobbies";
import ItemsContainer from "../../../components/ItemsContainer";

import { withContext } from "../../../context";

function RegisterHobbies({ contextState: { registerForm }, goToRegisterDone }) {
  async function submitRegister() {
    const { lastname, firstname, email, password, genre } = registerForm;
    const params = new URLSearchParams();
    params.append("lastname", lastname);
    params.append("firstname", firstname);
    params.append("email", email);
    params.append("password", password);
    params.append("genre", genre);

    await axios({
      method: "post",
      data: params,
      url: "/auth/register"
    })
      .then(res => {
        console.log(res);
        goToRegisterDone();
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="RegisterHobbies">
      <ItemsContainer items={Hobbies} />
      <Button onClick={submitRegister} text="Confirmer mon inscription" />
    </div>
  );
}

export default withContext(RegisterHobbies);
