import "./App.css";
import PropertiesList from "./components/PropertiesList";
import { results, saved } from "./data.json";
import { useState } from "react";

const App = () => {
  const [savedProperties, setSavedProperties] = useState(saved);
  let clickedProperty = null;

  const handleClick = (propertyID) => {
    const propertyInSaved = savedProperties.find(
      (property) => property.id === propertyID
    );
    const propertyInResults = results.find(
      (property) => property.id === propertyID
    );

    if ((clickedProperty = propertyInSaved)) {
      setSavedProperties(
        savedProperties.filter((property) => {
          return clickedProperty !== property;
        })
      );
    } else if ((clickedProperty = propertyInResults)) {
      setSavedProperties([...savedProperties, clickedProperty]);
    }
  };

  return (
    <div className="App">
      <PropertiesList
        title="Results"
        category="results"
        data={results}
        handleClick={handleClick}
      />
      <PropertiesList
        title="Saved Properties"
        category="saved"
        data={savedProperties}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;

// Jon's list of cool to dos because he loves you
// break up the two responsibilities in that handleClick function - semantic names
// implicit return cos they are cool
