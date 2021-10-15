const OverView = ({ incom, expense }) => {
  return (
    <section>
      <div>
        <p>Balance: {incom - expense}</p>
        <button>Add</button>
      </div>
      <div>
        <div>Expense:{expense}</div>
        <div>Income:{incom}</div>
      </div>
    </section>
  );
};

export default OverView;
