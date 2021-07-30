/**
 @author arthurmita
 created 29/07/2021 at 17:51
 **/

import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import ExpenseList from "./ExpensesList/ExpensesList";

const Expenses = ({ expenses }) => {
  const [year, setYear] = useState("2021");

  const yearSelectedHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className={"expenses"}>
      <ExpenseFilter onYearSelected={yearSelectedHandler} selectedYear={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
