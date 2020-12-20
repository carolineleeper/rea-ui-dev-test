import style from "./Price.module.css";

const Price = (props) => (
  <div className={style.priceContainer}>
    <p className={style.price}>{props.price}</p>
  </div>
);

export default Price;
