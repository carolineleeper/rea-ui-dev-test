import style from "./Agency.module.css";

const Agency = (props) => {
  return (
    <div
      className={style.agencyContainer}
      style={{ backgroundColor: props.color }}
    >
      <img src={props.logo} alt="" />
    </div>
  );
};

export default Agency;
