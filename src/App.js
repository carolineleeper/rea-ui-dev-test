import "./App.css";
import Results from "./components/Results";
import SavedProperties from "./components/SavedProperties";
import { results, saved } from "./data.json";
import { useState } from "react";

function App() {
  const [newSaved, setNewSaved] = useState(saved);

  const handleClick = (propertyID) => {
    if (newSaved.find((property) => property.id === propertyID)) {
      const clickedProperty = newSaved.find(
        (property) => property.id === propertyID
      );

      setNewSaved(
        newSaved.filter((property) => {
          return clickedProperty !== property;
        })
      );
    } else if (results.find((property) => property.id === propertyID)) {
      const clickedProperty = results.find(
        (property) => property.id === propertyID
      );

      setNewSaved([...newSaved, clickedProperty]);
    }
  };

  const data = { results, newSaved };

  return (
    <div className="App">
      <Results data={data.results} handleClick={handleClick} />
      <SavedProperties data={data.newSaved} handleClick={handleClick} />
    </div>
  );
}

export default App;
