const AddButton = (props) => {
  return (
    <button
      // propertyid={props.propertyId}
      onClick={() => props.handleClick(props.propertyId)}
    >
      Add Property
    </button>
  );
};

export default AddButton;
