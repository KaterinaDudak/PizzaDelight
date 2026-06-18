import { NavLink } from "react-router";
import pizzasData from "../../pizzas.json";
import Button from "../Button/Button";
import GoodItem from "../GoodItem/GoodItem";

import styles from "./GoodsList.module.scss";
import Heading from "../Heading/Heading";

const GoodsList = () =>{
  return (
    <div className={styles.goodsList}>
      <Heading title="Checkout Our Menu" subtitle=""></Heading>
      <ul className={`pizza-list container ${styles.list}`}>
        {pizzasData.slice(0, 6).map((pizza) => (
          <GoodItem
            key={pizza.id}
            title={pizza.title}
            descr={pizza.descr}
            price={pizza.price}
            imgUrl={pizza.imgUrl}
          />
        ))}
      </ul>
      <NavLink to="/menu" className={styles.link}>
        <Button type="submit" className={styles.heroButton}>
          View Full Menu
        </Button>
      </NavLink>
    </div>
  );
}
export default GoodsList