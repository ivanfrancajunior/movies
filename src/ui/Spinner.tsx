import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full mt-20">
      <div className={styles.ldsEllipsis}>
        <div></div>
        <div className="middle"></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
