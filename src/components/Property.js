import Agency from "./Agency";
import MainImage from "./MainImage";
import Price from "./Price";
import AddButton from "./AddButton";
import style from "./Property.module.css";

const Property = (props) => {
  return (
    <div className={style.propertyCard}>
      <Agency color={props.color} logo={props.agencyLogo} />
      <MainImage mainImage={props.mainImage} />
      <Price price={props.price} />
      <AddButton
        handleClick={props.handleClick}
        propertyId={props.propertyId}
        category={props.category}
      />
    </div>
  );
};

export default Property;
