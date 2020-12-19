import Agency from "./Agency";
import MainImage from "./MainImage";
import Price from "./Price";
import Button from "./Button";
import style from "./Property.module.css";
import { useState } from "react";

const Property = (props) => {
  const { property } = props;
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className={style.propertyCard}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Agency
        color={property.agency.brandingColors.primary}
        logo={property.agency.logo}
      />
      <MainImage mainImage={property.mainImage} />
      <div className={style.priceContainer}>
        <Price price={property.price} />
        {isShown && (
          <Button
            handleClick={props.handleClick}
            propertyId={property.id}
            category={props.category}
          />
        )}
      </div>
    </div>
  );
};

export default Property;

// multiple levels over and over again is bad
