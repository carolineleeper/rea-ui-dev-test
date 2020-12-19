import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={style.propertyButton}
      onClick={() => props.handleClick(props.propertyId)}
    >
      {props.category === "saved" ? "Remove Property" : "Add Property"}
    </button>
  );
};

export default Button;
