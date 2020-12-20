import style from "./MainImage.module.css";

const MainImage = (props) => (
  <img src={props.mainImage} alt="" className={style.mainImage} />
);

export default MainImage;
