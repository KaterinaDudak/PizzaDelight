import { useState} from "react";
import styles from "./Cart.module.scss";

const Cart = () => {
  
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("pizza_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const totalPrice = cartItems
    .reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  
  const handleRemoveItem = (cartId) => {
    const updatedCart = cartItems.filter((item) => item.cartId !== cartId);
    setCartItems(updatedCart);
    localStorage.setItem("pizza_cart", JSON.stringify(updatedCart)); 
  };


  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("pizza_cart");
  };

  return (
    <div className={`${styles.cartPage} container`}>
      <h2 className={styles.cartTitle}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Cart is empty.</p>
          <p className={styles.subText}>
            Go to the menu to choose the most delicious pizza!
          </p>
        </div>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item) => {
              const itemTotal = (Number(item.price) * item.quantity).toFixed(2);

              return (
                <li key={item.cartId} className={styles.cartItem}>
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className={styles.cartImg}
                  />

                  <div className={styles.cartInfo}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.descr}>{item.descr}</p>
                    <p className={styles.meta}>
                      Розмір:{" "}
                      <span className={styles.sizeBadge}>{item.size}</span>
                    </p>
                  </div>

                  <div className={styles.cartPriceBlock}>
                    <p className={styles.pricePerOne}>
                      ${Number(item.price).toFixed(2)} x {item.quantity}
                    </p>
                    <p className={styles.itemTotal}>${itemTotal}</p>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.cartId)}
                    className={styles.deleteBtn}
                    title="Видалити з кошика"
                  >
                    ❌
                  </button>
                </li>
              );
            })}
          </ul>

          <div className={styles.cartFooter}>
            <div className={styles.totalPrice}>
              <span>Total payable:</span>
              <strong>${totalPrice}</strong>
            </div>
            <button className={styles.orderBtn}>Checkout</button>

            <div className={styles.cartHeader}>
              <button onClick={handleClearCart} className={styles.clearBtn}>
                Empty cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
