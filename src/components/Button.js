import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={
        props.showButton ? style.propertyButton : style.hiddenPropertyButton
      }
      onClick={() => {
        props.toggleSaveProperty(props.propertyId);
      }}
    >
      {props.savedPropertiesIds.includes(props.propertyId) ? "Remove" : "Add"}
    </button>
  );
};

export default Button;
