import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = ({ onYearSelected, selectedYear }) => {
  const yearSelectedHandler = (e) => {
    onYearSelected(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={yearSelectedHandler} value={selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
