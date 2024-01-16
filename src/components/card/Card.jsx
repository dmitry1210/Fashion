import styles from "./Card.module.css";
import arrorImg from "../../img/icons/arrow.svg";

const Card = (props) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <a href="#!" className="styles.card__link"></a>
      <img className={styles.card__img} src={props.img} alt="Category..." />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{props.title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrorImg} alt="Open" />
        </div>
      </div>
    </div>
  );
};

export default Card;
