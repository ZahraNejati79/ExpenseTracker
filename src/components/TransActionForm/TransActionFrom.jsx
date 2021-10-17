import { useState } from "react";
import styles from "./TransActionForm.module.css";
const TransActionForm = ({ addTarnsAction }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTarnsAction(formValue);
  };
  return (
    <form
      onSubmit={submitHandler}
      action="submit"
      className={styles.formTransAction}
    >
      <input
        action="text"
        name="desc"
        value={formValue.desc}
        checked={formValue.type == "expense"}
        onChange={changeHandler}
      ></input>
      <input
        action="number"
        name="amount"
        value={formValue.amount}
        checked={formValue.type == "income"}
        onChange={changeHandler}
      ></input>
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
        />
        <label>Income</label>
        <button type="submit">Add transaction</button>
      </div>
    </form>
  );
};

export default TransActionForm;
