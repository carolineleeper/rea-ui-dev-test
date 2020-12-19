import style from "./Button.module.css";
import { useState } from "react";

const Button = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <button
      className={style.propertyButton}
      disabled={isDisabled}
      onClick={() => {
        setIsDisabled(true);
        props.handleClick(props.propertyId);
      }}
    >
      {props.category === "saved" ? "Remove Property" : "Add Property"}
    </button>
  );
};

export default Button;
