import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState(2679);
  const yearSelectHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onYearSelect={yearSelectHandler} expenses={props.items} />
      {[
        props.items
          .filter(
            (item) =>
              selectedYear === 2679 ||
              item.date.getFullYear() === Number(selectedYear)
          )
          .map((item) => {
            console.log(item.date.getFullYear());
            return <ExpenseItem item={item} key={item.id} />;
          }),
      ]}
    </Card>
  );
};

export default Expenses;
