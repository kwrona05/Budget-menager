/* eslint-disable react/prop-types */
function FoundsList({ transactions, deleteTransactions }) {
  return (
    <ul>
      {transactions?.map((transaction, index) => (
        <li key={index}>
          <strong>{transaction.date}</strong>
          <span> {transaction.category}</span>
          <strong> {transaction.amount.toFixed(2)} PLN</strong>
          <button onClick={() => deleteTransactions(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default FoundsList;
