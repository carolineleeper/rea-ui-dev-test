import style from "./Button.module.css";
import { useState } from "react";

const Button = (props) => {
  const [category, setCategory] = useState(props.category);

  return (
    <button
      className={
        props.showButton ? style.propertyButton : style.hiddenPropertyButton
      }
      onClick={() => {
        category === "saved" ? setCategory("result") : setCategory("saved");
        props.handleClick(props.propertyId);
      }}
    >
      {category === "saved" ? "Remove" : "Add"}
    </button>
  );
};

export default Button;
