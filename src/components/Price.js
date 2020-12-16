import style from "./Price.module.css";

const Price = (props) => {
  return (
    <div className={style.priceContainer}>
      <p>{props.price}</p>
    </div>
  );
};

export default Price;
