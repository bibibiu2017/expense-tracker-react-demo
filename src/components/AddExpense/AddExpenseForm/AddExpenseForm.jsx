import React, { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [formDisabled, setFormDisabled] = useState(true);

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  const toggleFormDisabled = () => {
    setFormDisabled((prev) => !prev);
  };

  const initForm = () => {
    setAmount("");
    setDate("");
    setTitle("");
    toggleFormDisabled();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title,
      amount,
      date: new Date(date),
    };
    onAddExpense(expense);
    initForm();
  };

  if (formDisabled)
    return (
      <div>
        <button type={"button"} onClick={toggleFormDisabled}>
          Add New Expense Expense
        </button>
      </div>
    );
  return (
    <form onSubmit={submitHandler}>
      <div className={"expense-form__controls"}>
        <div className={"expense-form__control"}>
          <label htmlFor={"title"}>Title</label>
          <input
            type={"text"}
            id={"title"}
            onChange={titleChangedHandler}
            value={title}
          />
        </div>
        <div className={"expense-form__control"}>
          <label htmlFor={"amount"}>Amount</label>
          <input
            type={"number"}
            id={"amount"}
            min={0.01}
            step={0.01}
            onChange={amountChangedHandler}
            value={amount}
          />
        </div>
        <div className={"expense-form__control"}>
          <label htmlFor={"date"}>Date</label>
          <input
            type={"date"}
            id={"date"}
            min={"2019-01-01"}
            max={"2022-12-31"}
            onChange={dateChangedHandler}
            value={date}
          />
        </div>
      </div>
      <div className={"expense-form__actions"}>
        <button type={"button"} onClick={toggleFormDisabled}>
          Cancel
        </button>
        <button type={"submit"}>Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
