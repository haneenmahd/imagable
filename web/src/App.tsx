import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import SampleImage from "./assets/png/adaptive-icon.png";
import Footer from "./components/Footer";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Landing defaultLink={SampleImage} />
      <Footer />
    </div>
  );
}

export default App;
