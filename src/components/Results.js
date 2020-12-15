import Agency from "./Agency";
import MainImage from "./MainImage";
import Price from "./Price";
import style from "./Results.module.css";
import { results } from "../data.json";

const Results = () => {
  return (
    <div className={style.resultsContainer}>
      <h1>Results</h1>
      {results.map((result) => {
        return (
          <div className={style.resultCard} key={result.id}>
            <Agency
              color={result.agency.brandingColors.primary}
              logo={result.agency.logo}
            />
            <MainImage src={result.mainImage} />
            <Price price={result.price} />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
