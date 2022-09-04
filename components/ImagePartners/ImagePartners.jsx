import styles from "./styles.module.scss";

const ImagePartners = ({ image }) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={image} alt="Image" />
    </div>
  );
};

export default ImagePartners;
