import "./App.scss";

import Layout from "./layout/Layout";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
