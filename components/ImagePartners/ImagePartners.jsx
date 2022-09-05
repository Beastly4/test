import styles from "./styles.module.scss";

const ImagePartners = ({ image }) => {
  return (
    <div className={styles.imageWrapper}>
      <img
        src={`${
          process.env.NEXT_PUBLIC_NODE_ENV !== "dev"
            ? process.env.NEXT_PUBLIC_PATH + image
            : image
        }`}
        alt="Image"
      />
    </div>
  );
};

export default ImagePartners;
