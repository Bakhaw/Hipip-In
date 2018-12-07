import React from "react";
import Register from "./Register";

import { RegisterProvider, withContext } from "../../context/Register";

function RegisterWrapper() {
  return (
    <RegisterProvider>
      <Register />
    </RegisterProvider>
  );
}

export default withContext(RegisterWrapper);
