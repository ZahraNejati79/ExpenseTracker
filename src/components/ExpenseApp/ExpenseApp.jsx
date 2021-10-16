import { useState } from "react";
import styles from "./ExpenseApp.module.css";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseApp = () => {
  const [expense, setSpense] = useState(0);
  const [incom, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  return (
    <div className={styles.container}>
      <div>
        <OverView expense={expense} incom={incom} />
      </div>
      <div>
        <TransAction transaction={transaction} />
      </div>
    </div>
  );
};

export default ExpenseApp;
