import styles from "./test.module.scss";

export const Test = () => {
  console.log(styles.test);
  return (
    <>
      <div className={styles.test}>TEST</div>
    </>
  );
};
