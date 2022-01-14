import "./App.scss";
import Create from "./pages/Create";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <Create />
    </div>
  );
}

export default App;
