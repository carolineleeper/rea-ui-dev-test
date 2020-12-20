import Property from "./Property";
import style from "./PropertiesList.module.css";

const PropertiesList = (props) => (
  <div className={style.propertiesContainer}>
    <h1>{props.title}</h1>
    {props.data.map((property) => (
      <Property
        property={property}
        key={property.id}
        toggleSaveProperty={props.toggleSaveProperty}
        category={props.category}
        savedPropertiesIds={props.savedPropertiesIds}
      />
    ))}
  </div>
);

export default PropertiesList;
