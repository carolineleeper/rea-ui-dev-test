import Agency from "./Agency";
import MainImage from "./MainImage";
import Price from "./Price";
import Button from "./Button";
import style from "./Property.module.css";

const Property = (props) => {
  return (
    <div className={style.propertyCard}>
      <Agency color={props.color} logo={props.agencyLogo} />
      <MainImage mainImage={props.mainImage} />
      <div className={style.priceContainer}>
        <Price price={props.price} />
        <Button
          handleClick={props.handleClick}
          propertyId={props.propertyId}
          category={props.category}
        />
      </div>
    </div>
  );
};

export default Property;

// destructure `property` from props, when you have a property prop
// multiple levels over and over again is bad
