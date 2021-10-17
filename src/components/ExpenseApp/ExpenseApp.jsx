import { useEffect, useState } from "react";
import styles from "./ExpenseApp.module.css";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseApp = () => {
  const [expense, setSpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  const addTarnsAction = (formValues) => {
    console.log(formValues);
    const data = { ...formValues, id: Date.now() };
    setTransaction([...transaction, data]);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;

    transaction.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });

    setIncome(inc);
    setSpense(exp);
  }, [transaction]);

  return (
    <div className={styles.container}>
      <div>
        <OverView
          expense={expense}
          income={income}
          addTarnsAction={addTarnsAction}
        />
      </div>
      <div>
        <TransAction transaction={transaction} />
      </div>
    </div>
  );
};

export default ExpenseApp;
