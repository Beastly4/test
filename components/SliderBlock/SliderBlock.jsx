import styles from "./styles.module.scss";
import Title from "../Title";

const SliderBlock = ({ item }) => {
  return (
    <div className={styles.slideWrapper}>
      <Title text={item?.year} className={styles.slideTitle} />
      <p className={styles.description}>{item?.description}</p>
    </div>
  );
};

export default SliderBlock;
