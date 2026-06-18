import InfoItem from "../InfoItem/InfoItem";
import styles from "./InfoList.module.scss";

const InfoList = ({infoItems}) => {
  return (
    <ul className={styles.list} >
      {infoItems.map((item) => (
        <InfoItem
          key={item.key}
          imgUrl={item.imgUrl}
          title={item.title}
          subtitle={item.subtitle}
        ></InfoItem>
      ))}
    </ul>
  );
};

export default InfoList;
