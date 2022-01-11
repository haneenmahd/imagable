import "./App.scss";
import FeatureBrief from "./components/FeatureBrief";

import Landing from "./components/Landing";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Landing />
      <FeatureBrief />
    </div>
  );
}

export default App;
