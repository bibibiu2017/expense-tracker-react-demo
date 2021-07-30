import React from "react";
import "./AddExpense.css";
import AddExpenseForm from "./AddExpenseForm/AddExpenseForm";

const AddExpense = ({ onAddExpense }) => {
  const addExpenseHandler = (expenseForm) => {
    const expense = {
      ...expenseForm,
      id: Math.random().toString(),
    };
    console.log(expense);
    onAddExpense(expense);
  };

  return (
    <div className={"add-expense"}>
      <AddExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default AddExpense;
