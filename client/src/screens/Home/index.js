import React from 'react';
import Home from './Home';

import { HomeProvider } from '../../context/Home';

function HomeWrapper({ history }) {
  return (
    <HomeProvider>
      <Home history={history} />
    </HomeProvider>
  );
}

export default HomeWrapper;
