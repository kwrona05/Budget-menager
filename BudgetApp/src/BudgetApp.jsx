import { useState } from "react";
import TransactionForm from "./TransactionForm";
import BudgetSummary from "./BudgetSummary";
import FoundsList from "./FoundsList";

function BudgetApp() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransactions = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <div className="container">
      <h1>Budget Menager App</h1>
      <TransactionForm addTransaction={addTransaction} />
      <BudgetSummary transactions={transactions} />
      <FoundsList
        transactions={transactions}
        deleteTransactions={deleteTransactions}
      />
    </div>
  );
}
export default BudgetApp;
