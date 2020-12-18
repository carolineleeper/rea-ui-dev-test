import style from "./AddButton.module.css";

const AddButton = (props) => {
  return (
    <button
      className={style.addButton}
      onClick={() => props.handleClick(props.propertyId)}
    >
      {props.category === "saved" ? "Remove Property" : "Add Property"}
    </button>
  );
};

export default AddButton;
