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
        placeholder="description"
        action="text"
        name="desc"
        value={formValue.desc}
        checked={formValue.type == "expense"}
        onChange={changeHandler}
      ></input>
      <input
        placeholder="amount"
        action="number"
        name="amount"
        value={formValue.amount}
        checked={formValue.type == "income"}
        onChange={changeHandler}
      ></input>
      <div className={styles.raidoinput}>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
        <button className={styles.btn} type="submit">
          Add transaction
        </button>
      </div>
    </form>
  );
};

export default TransActionForm;
