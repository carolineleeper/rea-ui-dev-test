import Property from "./Property";
import style from "./Results.module.css";
import { results } from "../data.json";

const Results = () => {
  return (
    <div className={style.resultsContainer}>
      <h1>Results</h1>
      {results.map((result) => {
        return (
          <Property
            key={result.id}
            color={result.agency.brandingColors.primary}
            agencyLogo={result.agency.logo}
            mainImage={result.mainImage}
            price={result.price}
          />
        );
      })}
    </div>
  );
};

export default Results;
