import styles from "./GoodItem.module.scss";

const GoodItem = (props) => {
  const {
    imgUrl = "",
    title = "Title",
    descr = "",
    price = 0,
  } = props;
  return (
    <li className={styles.card}>
  
      <div className={styles.imageWrapper}>
        <img src={imgUrl} alt={title} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description} style={{ whiteSpace: "pre-line" }}>
          {descr}
        </p>


        <div className={styles.footer}>
          <span className={styles.price}>{price} $</span>
          
        </div>
      </div>
    </li>
  );
};
export default GoodItem;
