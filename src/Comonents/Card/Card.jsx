import styles from "../Card/Card.module.css";

export default function Card({ details }) {
  return (
    <div className={styles.cardContainer}>
      {details.map((detail) => (
        <div className={styles.card}>
          <img src={detail.img} alt={detail.title} />
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
        </div>
      ))}
    </div>
  );
}
