import Button from "../Button/Button";
import { NavLink } from "react-router";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>
          Authentic Italian <span className="red">Pizzas</span> Delivered To
          Your Door
        </h1>
        <p className={styles.text}>
          Hand-crafted with premium ingredients, our pizzas bring the authentic
          taste of Italy to your home.
        </p>
        <NavLink to="/menu" className={styles.link}>
          <Button type="submit" className={styles.heroButton}>
            Order Now
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16667 9.99999H15.8333M10 15.8333L15.8333 9.99999L10 4.16666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
