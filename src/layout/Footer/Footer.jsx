import { Link, NavLink } from "react-router";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Link to="/" className={styles.link}>
          <p className={styles.footerLogo}>
            <span className="tomato">Pizza</span>Delight
          </p>
        </Link>
        <div className={styles.info}>
          <p className={styles.text}>
            Serving the most delicious pizzas made with fresh ingredients and
            traditional recipes since 2005.
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/menu" className={styles.link}>
                Menu
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/about" className={styles.link}>
                About
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/contacts" className={styles.link}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 8.33329C16.6667 12.4941 12.0508 16.8275 10.5008 18.1658C10.3564 18.2744 10.1807 18.3331 10 18.3331C9.81934 18.3331 9.64357 18.2744 9.49918 18.1658C7.94918 16.8275 3.33334 12.4941 3.33334 8.33329C3.33334 6.56518 4.03572 4.86949 5.28596 3.61925C6.53621 2.36901 8.2319 1.66663 10 1.66663C11.7681 1.66663 13.4638 2.36901 14.7141 3.61925C15.9643 4.86949 16.6667 6.56518 16.6667 8.33329Z"
                  stroke="#A81817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.8333C11.3807 10.8333 12.5 9.714 12.5 8.33329C12.5 6.95258 11.3807 5.83329 10 5.83329C8.6193 5.83329 7.50001 6.95258 7.50001 8.33329C7.50001 9.714 8.6193 10.8333 10 10.8333Z"
                  stroke="#A81817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              123 Pizza Street, Latifabad, HYD 7800
            </li>
            <li className={styles.item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5267 13.8066C11.6988 13.8857 11.8927 13.9037 12.0764 13.8578C12.2601 13.8119 12.4228 13.7048 12.5375 13.5541L12.8333 13.1666C12.9886 12.9596 13.1899 12.7916 13.4213 12.6759C13.6527 12.5602 13.9079 12.5 14.1667 12.5H16.6667C17.1087 12.5 17.5326 12.6756 17.8452 12.9881C18.1577 13.3007 18.3333 13.7246 18.3333 14.1666V16.6666C18.3333 17.1087 18.1577 17.5326 17.8452 17.8451C17.5326 18.1577 17.1087 18.3333 16.6667 18.3333C12.6884 18.3333 8.8731 16.7529 6.06005 13.9399C3.24701 11.1268 1.66666 7.31154 1.66666 3.33329C1.66666 2.89127 1.84225 2.46734 2.15481 2.15478C2.46737 1.84222 2.8913 1.66663 3.33332 1.66663H5.83332C6.27535 1.66663 6.69927 1.84222 7.01183 2.15478C7.32439 2.46734 7.49999 2.89127 7.49999 3.33329V5.83329C7.49999 6.09203 7.43975 6.34722 7.32404 6.57865C7.20832 6.81007 7.04032 7.01138 6.83332 7.16663L6.44332 7.45913C6.29034 7.57594 6.18251 7.74211 6.13815 7.92942C6.09379 8.11672 6.11564 8.31361 6.19999 8.48663C7.33889 10.7998 9.21201 12.6706 11.5267 13.8066Z"
                  stroke="#A81817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="123-456-7890" type="tel" className={styles.link}>
                123-456-7890
              </a>
            </li>
            <li className={styles.item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 5.83337L10.8408 10.6059C10.5866 10.7536 10.2978 10.8313 10.0037 10.8313C9.70971 10.8313 9.42091 10.7536 9.16666 10.6059L1.66666 5.83337M3.33332 3.33337H16.6667C17.5871 3.33337 18.3333 4.07957 18.3333 5.00004V15C18.3333 15.9205 17.5871 16.6667 16.6667 16.6667H3.33332C2.41285 16.6667 1.66666 15.9205 1.66666 15V5.00004C1.66666 4.07957 2.41285 3.33337 3.33332 3.33337Z"
                  stroke="#A81817"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a>info@pizzadelight.com</a>
            </li>
          </ul>
          <div>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday: 11:00 AM - 11:00 PM</p>
            <p>Sunday: 12:00 PM - 9:00 PM</p>
          </div>
        </div>
      </div>
          <div className={`${ styles.footerInfo } ${styles.footerContainer}`}>
        <p>© 2025 Pizza Delight. All rights reserved</p>
        <div className={styles.privacy}>
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>
          <a href="#" className={styles.link}>
            Terms and Service
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
