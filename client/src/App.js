import React from "react";
import { AppStateProvider } from "./context";
import Router from "./Router";

function App() {
  return (
    <AppStateProvider>
      <Router />
    </AppStateProvider>
  );
}

export default App;
