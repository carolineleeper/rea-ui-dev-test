import Property from "./Property";
import style from "./Results.module.css";

const Results = (props) => {
  return (
    <div className={style.resultsContainer}>
      <h1>Results</h1>
      {props.data.results.map((property) => {
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

export default Results;
