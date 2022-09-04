import ImagePartners from "../ImagePartners/ImagePartners";
import Title from "../Title";
import styles from "./styles.module.scss";

const Partners = ({ title, blocks, titleStyles, withSeparator }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        withSeparator ? styles?.withSeparator : ""
      }`}
    >
      <Title text={title} className={titleStyles} />
      <div className={styles.blocksWrapper}>
        {blocks?.map((item) => (
          <ImagePartners key={item?.id} image={item?.image} />
        ))}
      </div>
    </div>
  );
};

export default Partners;
