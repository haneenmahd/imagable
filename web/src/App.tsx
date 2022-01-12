import "./App.scss";
import FeatureBrief from "./components/FeatureBrief";
import Footer from "./components/Footer";

import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <FeatureBrief />
      <Footer />
    </div>
  );
}

export default App;
