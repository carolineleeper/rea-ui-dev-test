import Agency from "./Agency";
import MainImage from "./MainImage";
import Price from "./Price";
import Button from "./Button";
import style from "./Property.module.css";
import { useState } from "react";

const Property = (props) => {
  const { property } = props;
  const [showButton, setShowButton] = useState(false);

  return (
    <div
      className={style.propertyCard}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      data-testid={props.category}
    >
      <Agency
        color={property.agency.brandingColors.primary}
        logo={property.agency.logo}
      />
      <MainImage mainImage={property.mainImage} />
      <div className={style.priceButtonContainer}>
        <Price price={property.price} />
        <Button
          toggleSaveProperty={props.toggleSaveProperty}
          propertyId={property.id}
          category={props.category}
          showButton={showButton}
          savedPropertiesIds={props.savedPropertiesIds}
        />
      </div>
    </div>
  );
};

export default Property;
