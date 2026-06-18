import styles from "./Heading.module.scss";

const Heading = (props) => {

  const {
        title = '',
        subtitle = '',
    }= props

  return (
    <>
      <h2 className={styles.header}>{title}</h2>
      <p className={styles.text}>
        {subtitle}
      </p>
    </>
  );
};

export default Heading;
