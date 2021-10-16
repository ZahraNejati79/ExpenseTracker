import styles from "./OverView.module.css";
const OverView = ({ incom, expense }) => {
  return (
    <section className={styles.sectionOverview}>
      <div className={styles.overview}>
        <p>Balance: {incom - expense}</p>
        <button>Add</button>
      </div>
      <div className={styles.expensincom}>
        <div>Expense:{expense}</div>
        <div>Income:{incom}</div>
      </div>
    </section>
  );
};

export default OverView;
