import "./App.scss";

/**
 * Main Render Component
 * @returns {JSX.Element} returns the main rendering component
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <form
        method="POST"
        action="https://localhost:3000/api/upload"
        encType="form"
      >
        <input type="file" name="image-file" />
        <input type="submit" value="Submit File" />
      </form>
    </div>
  );
}

export default App;
