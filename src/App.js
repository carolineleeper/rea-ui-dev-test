import "./App.css";
import Results from "./components/Results";
import SavedProperties from "./components/SavedProperties";
import { results, saved } from "./data.json";
import { useState } from "react";

function App() {
  const [newSaved, setNewSaved] = useState(saved);

  const handleClick = (propertyID) => {
    const clickedProperty = results.find(
      (property) => property.id === propertyID
    );

    if (clickedProperty) {
      setNewSaved([...newSaved, clickedProperty]);
    }
  };

  // useEffect(() => {
  //   if (propertyID !== undefined) {
  //     // find property in results array
  //     const newProperty = results.filter(
  //       (property) => property.id === propertyID
  //     );

  //     // if it's already in saved array remove it
  //     // if (newSaved.some((property) => property.id === propertyID)) {
  //     //   setNewSaved((newSaved) => [...newSaved, ...newProperty]);
  //     // }

  //     // if it's not in the saved array add it
  //     if (!newSaved.some((property) => property.id === propertyID)) {
  //       setNewSaved((newSaved) => [...newSaved, ...newProperty]);
  //     }
  //   }
  // }, [propertyID, newSaved]);

  const data = { results, newSaved };

  return (
    <div className="App">
      <Results data={data} handleClick={handleClick} />
      <SavedProperties data={data} handleClick={handleClick} />
    </div>
  );
}

export default App;
