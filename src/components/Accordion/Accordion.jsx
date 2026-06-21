import { useState } from "react";
import styles from "./Accordion.module.scss";


const Accordion = ({ pizzasData, onAddToCart }) => {
  const [openId, setOpenId] = useState(0);

  const clickHandler = (id) => {
    if (id === openId) {
      setOpenId(openId);
    } else {
      setOpenId(id);
    }
  };

     return (
       <ul className={`${styles.accordion} container`}>
         {pizzasData.map((pizza, id) => (
           <PizzaItem
             key={id}
             id={id}
             pizza={pizza}
             isOpen={id === openId}
             onToggle={() => clickHandler(id)}
             onAddToCart={onAddToCart}
           />
         ))}
       </ul>
     );
};

export default Accordion;


const PizzaItem = ({ pizza, id, isOpen, onToggle, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("medium"); 

  const basePrice = Number(pizza.price) || 12.99;

  const getSizeModifier = () => {
    if (size === "small") return -2.0;
    if (size === "large") return 2.0;
    if (size === "xlarge") return 4.0;
    return 0.0;
  };

  const currentPrice = basePrice + getSizeModifier();
  const totalPrice = (currentPrice * quantity).toFixed(2);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddClick = (e) => {
        
    e.stopPropagation()
      
    onAddToCart({
      id: pizza.id || id,
      title: pizza.title,
      imgUrl: pizza.imgUrl,
      descr: pizza.descr,
      price: currentPrice, 
      size: size,          
      quantity: quantity,  
    });
    setQuantity(1); 
  };

  return (
    <li className={styles.item}>
      <div className={styles.button} onClick={onToggle}>
        <img
          src={`${import.meta.env.BASE_URL}${pizza.imgUrl}`}
          alt={pizza.title}
          className={styles.imgSmall}
        />
        <div>
          <h3 className={styles.title}>{pizza.title}</h3>
          <p className={styles.descr}>{pizza.descr}</p>
        </div>
      </div>

      <div className={`${styles.collapse} ${isOpen ? styles.open : ""}`}>
        <div className={styles.body}>
          <img
            src={`${import.meta.env.BASE_URL}${pizza.imgUrl}`}
            alt={pizza.title}
            className={styles.imgLarge}
          />

          <div className={styles.info}>
            <h3>{pizza.title}</h3>
            <p>{pizza.descr}</p>
          </div>

          <div className={styles.size}>
            <h3 className={styles.sizeTitle}>Size</h3>
            <ul className={styles.sizes}>
              <li>
                <input
                  type="radio"
                  name={`size-group-${id}`}
                  id={`small-${id}`}
                  checked={size === "small"}
                  onChange={() => setSize("small")}
                />
                <label htmlFor={`small-${id}`}>Small (10") -$2.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  name={`size-group-${id}`}
                  id={`medium-${id}`}
                  checked={size === "medium"}
                  onChange={() => setSize("medium")}
                />
                <label htmlFor={`medium-${id}`}>Medium (12") included</label>
              </li>
              <li>
                <input
                  type="radio"
                  name={`size-group-${id}`}
                  id={`large-${id}`}
                  checked={size === "large"}
                  onChange={() => setSize("large")}
                />
                <label htmlFor={`large-${id}`}>Large (14") +$2.00</label>
              </li>
              <li>
                <input
                  type="radio"
                  name={`size-group-${id}`}
                  id={`xlarge-${id}`}
                  checked={size === "xlarge"}
                  onChange={() => setSize("xlarge")}
                />
                <label htmlFor={`xlarge-${id}`}>X-Large (16") +$4.00</label>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles.allPrices}>
              <div className={styles.counter}>
                <button type="button" onClick={decrement}>
                  -
                </button>
                <p>{quantity}</p>
                <button type="button" onClick={increment}>
                  +
                </button>
              </div>
              <div>
                <h4>Price: ${basePrice.toFixed(2)}</h4>
                <h4>Total: ${totalPrice}</h4>
              </div>
            </div>
            <button
              type="button"
              className={styles.totalButton}
              onClick={(e) => handleAddClick(e)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
