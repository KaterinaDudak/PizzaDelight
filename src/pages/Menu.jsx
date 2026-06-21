import pizzasData from "../pizzas.json";
import Accordion from "../components/Accordion/Accordion";


const Menu = () => {


   const handleAddToCart = (pizzaOrder) => {
     const currentCart = JSON.parse(localStorage.getItem("pizza_cart")) || [];
     const uniqueCartId = `${pizzaOrder.id}_${pizzaOrder.size}`;
     const exists = currentCart.find((item) => item.cartId === uniqueCartId);

     let updatedCart;
     if (exists) {
       updatedCart = currentCart.map((item) =>
         item.cartId === uniqueCartId
           ? { ...item, quantity: item.quantity + pizzaOrder.quantity }
           : item
       );
     } else {
       updatedCart = [...currentCart, { ...pizzaOrder, cartId: uniqueCartId }];
     }

     localStorage.setItem("pizza_cart", JSON.stringify(updatedCart));

     window.dispatchEvent(new Event("cartUpdate"));

     alert("Пицца добавлена в корзину!");
   };

  return (
    <>
      <Accordion
        pizzasData={pizzasData}
        onAddToCart={handleAddToCart}
      ></Accordion>
    </>
  );
};
export default Menu;
