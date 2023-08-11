import { useState } from "react";
import "./ExpenseFilter.css";

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ExpenseFilter = (props) => {
  const years = new Set(
    props.expenses.map((expense) => expense.date.getFullYear())
  );

  //   const [monthsWithExpenses, setMonthsWithExpenses] = useState({});

  const yearSelectHandler = (e) => {
    const selectedYear = e.target.value;
    props.onYearSelect(selectedYear);

    const months = props.expenses
      .filter((expense) => expense.date.getFullYear() === Number(selectedYear))
      .map((expense) => expense.date.getMonth());

    // setMonthsWithExpenses(months);
    updateChart(months);
  };

  const updateChart = (months) => {
    const numberOfExpenses = months.length;
    const expensesByMonth = {};

    months.forEach((month) => {
      if (expensesByMonth[month] === undefined) {
        expensesByMonth[month] = 1;
      } else {
        expensesByMonth[month] += 1;
      }
    });

    Months.forEach((el, i) =>
      document.querySelector(`#bar-${i}`).style.setProperty("--height", 0)
    );

    for (let month of Object.keys(expensesByMonth)) {
      const bar = document.querySelector(`#bar-${month}`);
      const barHeight = (expensesByMonth[month] / numberOfExpenses) * 100;
      bar.style.setProperty("--height", `${barHeight}%`);
    }
  };

  //   console.log(monthsWithExpenses);

  return (
    <div className="expense__filter">
      <div className="expense__filter--filter-by">
        <p>Filter by year</p>
        <select onChange={yearSelectHandler} name="year" id="year">
          <option selected value="">
            Select Year
          </option>
          {[...years].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="expense__filter--chart">
        {Months.map((month, i) => {
          return (
            <div className="expense__filter--chart-bar" key={i} data-id={i}>
              <div className="bar" id={`bar-${i}`}></div>
              <div className="bar__label">{month}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseFilter;
