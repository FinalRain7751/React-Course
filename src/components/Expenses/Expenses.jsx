import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(0);
  const expenseYears = new Set(
    props.items.map((item) => item.date.getFullYear())
  );
  // console.log(selectedYear);
  const filteredExpenses =
    selectedYear === 0
      ? props.items
      : props.items.filter(
          (item) => item.date.getFullYear() === Number(selectedYear)
        );

  const yearSelectHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        onYearSelect={yearSelectHandler}
        selectedYear={selectedYear}
        filteredExpenses={filteredExpenses}
        expenseYears={expenseYears}
      />

      {filteredExpenses.map((item) => (
        <ExpenseItem item={item} key={item.id} />
      ))}
    </Card>
  );
};

export default Expenses;
