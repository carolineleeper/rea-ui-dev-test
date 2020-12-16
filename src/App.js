import "./App.css";
import Results from "./components/Results";
import SavedProperties from "./components/SavedProperties";
import { results, saved } from "./data.json";

function App() {
  return (
    <div className="App">
      <Results results={results} />
      <SavedProperties saved={saved} />
    </div>
  );
}

export default App;
