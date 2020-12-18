const AddButton = (props) => {
  return (
    <button onClick={() => props.handleClick(props.propertyId)}>
      Add Property
    </button>
  );
};

export default AddButton;
