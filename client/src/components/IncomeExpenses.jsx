import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import {numberWithCommas} from '../util/format'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)*-1)
    .toFixed(2);

  return (
    <div className="income-expense">
      <div className="income-section">
        <h4>Income</h4>
        <p>+$ {numberWithCommas(income)}</p>
      </div>
      <div className="expense-section">
        <h4>Expenses</h4>
        <p>-$ {numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
