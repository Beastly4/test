import styles from "./styles.module.scss";

const LocationBlock = ({ icon, title }) => {
  return (
    <div className={styles.block}>
      <img
        src={`${
          process.env.NEXT_PUBLIC_NODE_ENV !== "dev"
            ? process.env.NEXT_PUBLIC_PATH + icon
            : icon
        }`}
        alt="Icon"
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default LocationBlock;
