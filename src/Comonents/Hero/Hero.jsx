import styles from "../Hero/Hero.module.css";
import checkmark from "../../assets/checkmark.svg";
import search from "../../assets/Search.svg";
import mainPerson from "../../assets/main-person.png";
import spinach from "../../assets/spinach.svg";
import carrot from "../../assets/carrot.svg";
import dairyImg from "../../assets/dairyImg.png";
import fruits from "../../assets/fruits.png";
import spices from "../../assets/spices.png";
import honey from "../../assets/honey.png";
import flour from "../../assets/flour.png";
import Card from "../Card/Card";

export default function Hero({ setCount }) {
  const serviceList = [
    {
      id: 1,
      content: "Fresh Vegetables",
      alt: "checkmark",
    },
    { id: 2, content: "100% Guarantee", alt: "checkmark" },
    {
      id: 3,
      content: "Cash on Delivery",
      alt: "checkmark",
    },
    { id: 4, content: "Fast Delivery", alt: "checkmark" },
  ];

  const productList = [
    {
      id: 1,
      title: "Dairy Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: `${dairyImg}`,
    },
    {
      id: 2,
      title: "Vegetables & Fruits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: `${fruits}`,
    },
    {
      id: 3,
      title: "Spices & Seasonings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: `${spices}`,
    },
    {
      id: 4,
      title: "Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: `${honey}`,
    },
    {
      id: 5,
      title: "Flour",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: `${flour}`,
    },
  ];
  return (
    <main>
      <div className={styles.mainTopContainer}>
        <div className={styles.mainLeft}>
          <h2>
            Let your <span>groceries</span> <br /> come to you
          </h2>
          <p>
            Get fresh groceries online without stepping out to <br /> make
            delicious food with the freshest ingredients
          </p>
          <div className={styles.mainInput}>
            <input type="text" placeholder="Search here" />
            <img className={styles.searchLogo} src={search} alt="search logo" />
          </div>
          <ul className={styles.serviceList}>
            {serviceList.map((service) => (
              <li>
                <img src={checkmark} alt={service.alt} />
                <h3>{service.content}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.mainRight}>
          <img className={styles.personImg} src={mainPerson} alt="person" />
          <div className={styles.productImgContainer}>
            <div className={styles.productImg}>
              <img onClick={setCount} src={spinach} alt="spinach" />
              <h4>Fresh Spinach</h4>
              <p>$12.00</p>
            </div>
            <div className={styles.productImg}>
              <img onClick={setCount} src={carrot} alt="carrot" />
              <h4>Fresh Carrot</h4>
              <p>$9.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainBottomContainer}>
        <Card details={productList} />
      </div>
    </main>
  );
}
