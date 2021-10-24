import { useEffect, useState } from "react";
import styles from "./TransAction.module.css";
const TransAction = ({ transaction }) => {
  const [search, setSearch] = useState("");
  const [filterTr, setFilterTn] = useState(transaction);

  const filterTransArtion = (search) => {
    if (!search || search === "") {
      setFilterTn(transaction);
    } else {
      const filtered = transaction.filter((tra) =>
        tra.desc.toLowerCase().includes(search)
      );
      setFilterTn(filtered);
    }
  };
  const changeHandler = (e) => {
    setSearch(e.target.value);
    filterTransArtion(e.target.value);
  };
  useEffect(() => {
    filterTransArtion(search);
  }, [transaction]);

  if (!transaction.length) return <h3>Add TransAction</h3>;
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={changeHandler}
        placeholder=" Search"
        className={styles.search}
      />
      {filterTr.length
        ? filterTr.map((t) => (
            <div
              className={styles.transAction}
              key={t.id}
              style={{ borderRight: t.type === "expense" && "3px solid red" }}
            >
              <span>{t.desc}</span>
              <span>$ {t.amount}</span>
            </div>
          ))
        : "Add TransAction"}
    </div>
  );
};

export default TransAction;
