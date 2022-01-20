import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import ImagableLogo from "./assets/svg/logo.svg";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Landing defaultLink={ImagableLogo} />
    </div>
  );
}

export default App;
