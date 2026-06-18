import styles from "./InfoItem.module.scss";

const InfoItem = ({imgUrl, title, subtitle }) => {
  return (
    <li className={styles.item}>
      <img src={imgUrl} alt={title} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.descr}>{subtitle}</p>
    </li>
  );
};

export default InfoItem;
