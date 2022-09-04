import styles from "./styles.module.scss";

const LocationBlock = ({ icon, title }) => {
  return (
    <div className={styles.block}>
      <img src={icon} alt="Icon" />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default LocationBlock;
