import Button from "../Button";
import Title from "../Title";
import Icon from "../Icon";
import styles from "./styles.module.scss";

const BlogBlock = ({ item, onClick }) => {
  return (
    <div className={styles.blockWrapper}>
      <img
        src={`${
          process.env.NEXT_PUBLIC_NODE_ENV !== "dev"
            ? process.env.NEXT_PUBLIC_PATH + item?.image
            : item?.image
        }`}
        alt="Image"
        className={styles.image}
      />
      <Title text={item?.title} className={styles.title} />
      <p className={styles.description}>{item?.description}</p>
      <Button type="secondary" onClick={onClick} className={styles.button}>
        <Icon.RightArrowSmall /> <span>{item?.buttonTitle}</span>{" "}
        <Icon.RightArrowSmall />
      </Button>
    </div>
  );
};

export default BlogBlock;
