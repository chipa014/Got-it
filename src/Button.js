import styles from "./Button.module.css";

const Button = function (props) {
  const close = function () {
    window.open("", "_self").close();
  };

  return (
    <button className={styles.btn} onClick={close}>
      {props.children}
    </button>
  );
};

export default Button;
