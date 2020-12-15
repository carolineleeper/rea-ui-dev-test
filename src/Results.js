import { results } from "./data.json";

const Results = () => {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <p>{result.id}</p>
            <div>
              <img src={result.agency.logo} alt="" />
              <p>Colour: {result.agency.brandingColors.primary}</p>
            </div>
            <img src={result.mainImage} alt="" />
            <p>{result.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
