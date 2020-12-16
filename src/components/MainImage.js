import style from "./MainImage.module.css";

const MainImage = (props) => {
  return <img src={props.mainImage} alt="" className={style.mainImage} />;
};

export default MainImage;
