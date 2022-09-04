import styles from "./styles.module.scss";

const Button = ({ children, className, type = "primary", ...buttonProps }) => {
  return (
    <button
      className={`${styles.button} ${className} ${
        Object.is(type, "primary") ? styles.primary : ""
      } ${Object.is(type, "secondary") ? styles.secondary : ""}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
