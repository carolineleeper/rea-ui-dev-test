import "./App.css";
import Results from "./components/Results";
import SavedProperties from "./components/SavedProperties";
import { results, saved } from "./data.json";
import { useState } from "react";

function App() {
  const [savedProperties, setSavedProperties] = useState(saved);

  const handleClick = (propertyID) => {
    if (savedProperties.find((property) => property.id === propertyID)) {
      const clickedProperty = savedProperties.find(
        (property) => property.id === propertyID
      );

      setSavedProperties(
        savedProperties.filter((property) => {
          return clickedProperty !== property;
        })
      );
    } else if (results.find((property) => property.id === propertyID)) {
      const clickedProperty = results.find(
        (property) => property.id === propertyID
      );

      setSavedProperties([...savedProperties, clickedProperty]);
    }
  };

  const data = { results, savedProperties };

  return (
    <div className="App">
      <Results data={data.results} handleClick={handleClick} />
      <SavedProperties data={data.savedProperties} handleClick={handleClick} />
    </div>
  );
}

export default App;

// Jon's list of cool to dos because he loves you
// rename your variables
// break up the two responsibilities in that handleClick function
// just pass down `results` and `newSaved` as props - don't construct new object
// implicit return cos they are cool
// make <Results /> and <SavedProperties /> the same component - pass down `title` and `category`
