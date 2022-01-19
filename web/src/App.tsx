import React from "react";
import "./App.css";
import Landing from "./components/Landing";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Landing defaultLink="https://cdn.vox-cdn.com/thumbor/DMXD2zLif49j6IP2i3Avda2Cyl0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg" />
    </div>
  );
}

export default App;
