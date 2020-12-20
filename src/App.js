import "./App.css";
import PropertiesList from "./components/PropertiesList";
import { results, saved } from "./data.json";
import { useState } from "react";

const App = () => {
  const [savedProperties, setSavedProperties] = useState(saved);

  const toggleSaveProperty = (propertyID) => {
    const propertyInSaved = savedProperties.find(
      (property) => property.id === propertyID
    );
    const propertyInResults = results.find(
      (property) => property.id === propertyID
    );

    if (propertyInSaved) {
      const clickedProperty = propertyInSaved;

      setSavedProperties(
        savedProperties.filter((property) => clickedProperty !== property)
      );
    } else if (propertyInResults) {
      const clickedProperty = propertyInResults;

      setSavedProperties([...savedProperties, clickedProperty]);
    }
  };

  const savedPropertiesIds = savedProperties.map((property) => property.id);

  return (
    <div className="App">
      <PropertiesList
        title="Results"
        category="results"
        data={results}
        toggleSaveProperty={toggleSaveProperty}
        savedPropertiesIds={savedPropertiesIds}
      />
      <PropertiesList
        title="Saved Properties"
        category="saved"
        data={savedProperties}
        toggleSaveProperty={toggleSaveProperty}
        savedPropertiesIds={savedPropertiesIds}
      />
    </div>
  );
};

export default App;
