import React from "react";
import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = ({ expenses }) => {
  const hasExpenses = expenses && expenses.length > 0;
  if (!hasExpenses)
    return <h2 className={"expenses-list__fallback"}>No Expenses Found</h2>;
  return (
    <ul className={"expenses-list"}>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
