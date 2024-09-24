/* eslint-disable react/prop-types */
function BudgetSummary({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome + totalExpenses;

  return (
    <div>
      <h2>Budget Summary</h2>
      <p>
        <strong>Total income:</strong>
        {totalIncome.toFixed(2)} PLN
      </p>
      <p>
        <strong>Total expenses:</strong> {Math.abs(totalExpenses).toFixed(2)}{" "}
        PLN
      </p>
      <p>
        <strong>Balance:</strong> {balance.toFixed(2)} PLN
      </p>
    </div>
  );
}
export default BudgetSummary;
