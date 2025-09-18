import logoImg from "../../assets/logo.svg";
import styles from "./Header.module.css";
import shopping from "../../assets/shopping.svg";
import shoppingActive from "../../assets/shopping-active.svg";

export default function Header() {
  const navData = [
    { id: 1, content: "Home", active: true },
    { id: 2, content: "Categories", active: false },
    { id: 3, content: "Sales", active: false },
    { id: 4, content: "FAQ", active: false },
    { id: 5, content: "About", active: false },
    { id: 6, content: "Contact", active: false },
  ];
  return (
    <header>
      <nav>
        <img src={logoImg} alt="logo" />
        <ul>
          {navData.map((data) => (
            <li>
              <a
                href="#"
                className={data.active ? styles.active : styles.nonActive}
              >
                {data.content}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.buttonsContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.shoppingCart}
              src={shopping}
              alt="shopping car"
            />
            <img
              className={styles.shoppingCartActive}
              src={shoppingActive}
              alt="shopping cart acitve"
            />
          </div>

          <button className={styles.primary}>Sign in</button>
          <button className={styles.secondary}>Sign up</button>
        </div>
      </nav>
    </header>
  );
}
