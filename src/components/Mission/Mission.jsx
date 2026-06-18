import img4 from "../../assets/images/img4.png"
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import Heading from "../Heading/Heading";
import InfoList from "../InfoList/InfoList";

import styles from "./Mission.module.scss";

const Mission = () => {

    const missionItems = [
      {
        key: 1,
        imgUrl: img4,
        title: "Quality Ingredients",
        subtitle:
          "We source only the freshest, highest-quality ingredients for our pizzas, from our imported Italian flour to local produce.",
      },
      {
        key: 2,
        imgUrl: img5,
        title: "Traditional Methods",
        subtitle:
          "Our dough is made fresh daily and left to rise for at least 24 hours, creating the perfect texture and flavor in every bite.",
      },
      {
        key: 3,
        imgUrl: img6,
        title: "Community Focus",
        subtitle:
          "We're proud to be a part of this community. We support local events, schools, and organizations whenever possible.",
      },
    ];
      
  return (
    <>
      <div className={`${styles.mission} container`}>
        <Heading
          title="Our Mission"
          subtitle="At Pizza Delight, our mission is simple: to create exceptional pizzas using the freshest ingredients and traditional methods, served with love and care to our community. We believe that good food brings people together, and we're proud to be a part of your special moments."
        ></Heading>
        <InfoList infoItems={missionItems}></InfoList>
      </div>
    </>
  );
};

export default Mission;
