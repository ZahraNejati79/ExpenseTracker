import styles from "./TransAction.module.css";
const TransAction = ({ transaction }) => {
  return (
    <div>
      {transaction.map((t) => (
        <div
          className={styles.transAction}
          key={t.id}
          style={{ borderRight: t.type === "expense" && "3px solid red" }}
        >
          <span>{t.desc}</span>
          <span>$ {t.amount}</span>
        </div>
      ))}
    </div>
  );
};

export default TransAction;
