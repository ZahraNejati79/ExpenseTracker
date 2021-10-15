import { useState } from "react";
import OverView from "../OverView/OverView";
import TransAction from "../TransAction/TransAction";

const ExpenseApp = () => {
  const [expense, setSpense] = useState(0);
  const [incom, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  return (
    <div>
      <OverView expense={expense} incom={incom} />
      <TransAction transaction={transaction} />
    </div>
  );
};

export default ExpenseApp;
