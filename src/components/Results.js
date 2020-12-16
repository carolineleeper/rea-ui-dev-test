import Property from "./Property";
import style from "./Results.module.css";

const Results = (props) => {
  return (
    <div className={style.resultsContainer}>
      <h1>Results</h1>
      {props.results.map((property) => {
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

export default Results;
