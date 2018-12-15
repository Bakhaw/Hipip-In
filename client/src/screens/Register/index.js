import React from 'react';
import Register from './Register';

import { RegisterProvider, withContext } from '../../context/Register';

function RegisterWrapper({ history }) {
  return (
    <RegisterProvider>
      <Register history={history} />
    </RegisterProvider>
  );
}

export default withContext(RegisterWrapper);
