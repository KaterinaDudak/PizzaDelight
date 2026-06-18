import img1 from "../../assets/images/img1.png"
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import Heading from "../Heading/Heading";
import InfoList from "../InfoList/InfoList";

import styles from "./DeliveryInfo.module.scss";

const DeliveryInfo = () => {

    const infoItems = [
      {
        key: 1,
        imgUrl: img1,
        title: "Order Your Food",
        subtitle:
          "Order the food by just adding it to the cart and placing the order, our professional chefs will start preparing your food rightaway",
      },
      {
        key: 2,
        imgUrl: img2,
        title: "Delivery & Pickup",
        subtitle:
          "Our riders will deliver your food with in 30 minutes or you can also pickup your order from our restaurant",
      },
      {
        key: 3,
        imgUrl: img3,
        title: "Enjoy Your Food",
        subtitle:
          "Enjoy the best quality Pizza, hand-crafted with premium ingredients. Bringing to you the authentic taste of Italy",
      },
    ];
      
  return (
    <>
      <div className={`${styles.delivery} container`}>
        <Heading
          title="Delivered in 30 minutes"
          subtitle="You can order your food by following a simple three steps process"
        ></Heading>
        <InfoList infoItems={infoItems}></InfoList>
      </div>
    </>
  );
};

export default DeliveryInfo;
