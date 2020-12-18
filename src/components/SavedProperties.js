import Property from "./Property";
import style from "./Results.module.css";

const SavedProperties = (props) => {
  return (
    <div className={style.resultsContainer}>
      <h1>Saved Properties</h1>
      {props.data.newSaved.map((property) => {
        return (
          <Property
            key={property.id}
            propertyId={property.id}
            color={property.agency.brandingColors.primary}
            agencyLogo={property.agency.logo}
            mainImage={property.mainImage}
            price={property.price}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
};

export default SavedProperties;
