import React from "react";
import "./App.scss";
import Landing from "./components/Landing";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
