import Property from "./Property";
import style from "./Results.module.css";

const SavedProperties = (props) => {
  return (
    <div className={style.resultsContainer}>
      <h1>Saved Properties</h1>
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
            category="saved"
          />
        );
      })}
    </div>
  );
};

export default SavedProperties;

// implicit returns
// pass down a full property prop, rather than each bit individually
