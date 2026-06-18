import Heading from "../Heading/Heading";

import styles from "./Banner.module.scss";

const Banner = (props) => {
  const { bgUrl, title, subtitle } = props;
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgUrl})`,
      }}
      className={styles.banner}
    >
      <Heading title={title} subtitle={subtitle}></Heading>
    </div>
  );
};

export default Banner;
