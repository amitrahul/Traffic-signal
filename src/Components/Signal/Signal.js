import styles from "./Signal.module.css";
const Signal = ({ bgColor, signal }) => {
  return (
    <div
      className={styles.light}
      style={{ backgroundColor: bgColor === signal ? bgColor : "grey" }}
    ></div>
  );
};
export default Signal;
