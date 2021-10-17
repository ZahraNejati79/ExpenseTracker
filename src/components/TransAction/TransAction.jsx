import styles from "./TransAction.module.css";
const TransAction = ({ transaction }) => {
  return (
    <div className={styles.transAction}>
      {transaction.map((t) => (
        <div key={t.id}>{t.desc}</div>
      ))}
    </div>
  );
};

export default TransAction;
