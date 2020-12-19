import Property from "./Property";
import style from "./PropertiesList.module.css";

const PropertiesList = (props) => {
  return (
    <div className={style.propertiesContainer}>
      <h1>{props.title}</h1>
      {props.data.map((property) => {
        return (
          <Property
            property={property}
            key={property.id}
            handleClick={props.handleClick}
            category={props.category}
          />
        );
      })}
    </div>
  );
};

export default PropertiesList;

// implicit returns
