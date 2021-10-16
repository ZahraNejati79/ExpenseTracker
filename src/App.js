import ExpenseApp from "./components/ExpenseApp/ExpenseApp";
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.App}>
      <header className="header">
        <h1>Expence Tracker</h1>
      </header>
      <div>
        <ExpenseApp />
      </div>
    </div>
  );
};

export default App;
