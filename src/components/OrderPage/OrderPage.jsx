import { useState } from "react";
import Cart from "../Cart/Cart";

import styles from "./OrderPage.module.scss";

const OrderPage = () => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("pizza_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const handleRemoveFromCart = (cartId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.cartId !== cartId);
      localStorage.setItem("pizza_cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  return (
    <div className={styles.pageLayout}>
      <div className={styles.cartColumn}>
        <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default OrderPage;
