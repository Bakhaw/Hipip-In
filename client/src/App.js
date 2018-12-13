import React from "react";
import { AppStateProvider } from "./context";
import Router from "./Router";
import Theme from "./Theme";

function App() {
  return (
    <Theme>
      <AppStateProvider>
        <Router />
      </AppStateProvider>
    </Theme>
  );
}

export default App;
