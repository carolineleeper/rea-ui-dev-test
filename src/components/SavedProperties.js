import Property from "./Property";
import style from "./Results.module.css";
import { saved } from "../data.json";

const SavedProperties = () => {
  return (
    <div className={style.resultsContainer}>
      <h1>Saved Properties</h1>
      {saved.map((property) => {
        return (
          <Property
            key={property.id}
            color={property.agency.brandingColors.primary}
            agencyLogo={property.agency.logo}
            mainImage={property.mainImage}
            price={property.price}
          />
        );
      })}
    </div>
  );
};

export default SavedProperties;
