import styles from "./TransAction.module.css";
const TransAction = ({ transaction }) => {
  return (
    <div className={styles.transAction}>
      <div>
        <p>Transaction</p>
      </div>
      <div>Search as</div>
    </div>
  );
};

export default TransAction;
