import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo.svg";

import styles from "./Header.module.scss";


const getCartCount = () => {
  if (typeof window === "undefined") return 0; 
  const savedCart = JSON.parse(localStorage.getItem("pizza_cart")) || [];
  return savedCart.reduce((sum, item) => sum + item.quantity, 0);
};

const Header = () => {
  const [cartCount, setCartCount] = useState(() => getCartCount());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  
    const handleUpdate = () => {
      setCartCount(getCartCount());
    };


    window.addEventListener("cartUpdate", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("cartUpdate", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.headerNav} container`}>
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`${styles.list} ${isMenuOpen ? styles.listOpen : ""}`}>
          <li className={styles.item}>
            <NavLink to="/" className={styles.link} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={styles.link} onClick={closeMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.link} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={styles.link} onClick={closeMenu}>
              Contacts
            </NavLink>
          </li>
        </ul>

        <div className={styles.actions}>
          <NavLink
            to="/order"
            className={styles.navLinkOrder}
            onClick={closeMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://w3.org" // Виправлено помилку в URL xmlns (було http://w3.org)
            >
              <path
                d="M2.04999 2.05005H4.04999L6.70999 14.47C6.80757 14.9249 7.06066 15.3315 7.4257 15.6199C7.79074 15.9083 8.24489 16.0604 8.70999 16.05H18.49C18.9452 16.0493 19.3865 15.8933 19.741 15.6079C20.0956 15.3224 20.3421 14.9246 20.44 14.48L22.09 7.05005H5.11999M8.99999 21C8.99999 21.5523 8.55227 22 7.99999 22C7.4477 22 6.99999 21.5523 6.99999 21C6.99999 20.4478 7.4477 20 7.99999 20C8.55227 20 8.99999 20.4478 8.99999 21ZM20 21C20 21.5523 19.5523 22 19 22C18.4477 22 18 21.5523 18 21C18 20.4478 18.4477 20 19 20C19.5523 20 20 20.4478 20 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Показуємо бейдж лише якщо в кошику є хоча б 1 товар */}
            {cartCount >= 0 && <span className={styles.badge}>{cartCount}</span>}
          </NavLink>

          <button
            className={`${styles.burger} ${
              isMenuOpen ? styles.burgerActive : ""
            }`}
            onClick={toggleMenu}
            aria-label="Перемикач меню"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;