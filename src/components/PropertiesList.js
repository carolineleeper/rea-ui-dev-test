import Property from "./Property";
import style from "./PropertiesList.module.css";

const PropertiesList = (props) => {
  return (
    <div className={style.propertiesContainer}>
      <h1>{props.title}</h1>
      {props.data.map((property) => {
        return (
          <Property
            key={property.id}
            propertyId={property.id}
            color={property.agency.brandingColors.primary}
            agencyLogo={property.agency.logo}
            mainImage={property.mainImage}
            price={property.price}
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
// pass down a full property prop, rather than each bit individually
