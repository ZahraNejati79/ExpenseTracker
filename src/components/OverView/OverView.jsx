import { useState } from "react";
import TransActionForm from "../TransActionForm/TransActionFrom";
import styles from "./OverView.module.css";

const OverView = ({ income, expense, addTarnsAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section className={styles.sectionOverview}>
      <div className={styles.overview}>
        <p>Balance: {income - expense}</p>
        <button
          className={`${isShow ? styles.cancel : styles.btn}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cancel" : " Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTarnsAction={addTarnsAction}
          setIsShow={setIsShow}
        />
      )}
      <div className={styles.expensincom}>
        <div className={styles.box}>
          Expense:<span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className={styles.box}>
          Income:<span> {income} $</span>
        </div>
      </div>
    </section>
  );
};

export default OverView;
