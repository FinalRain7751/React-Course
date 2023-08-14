import "./ExpenseFilter.css";
import Chart from "../UI/Chart/Chart.jsx";

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
  let monthlyExpense = new Array(12).fill(0);
  let totalExpense = 0;

  const selectedYear = props.selectedYear;
  const showChart = selectedYear !== 0 ? true : false;

  props.filteredExpenses.forEach((expense) => {
    monthlyExpense[expense.date.getMonth()] += Number(expense.amount);
    totalExpense += Number(expense.amount);
  });

  const yearSelectHandler = (e) => {
    const selectedYear = Number(e.target.value);
    props.onYearSelect(selectedYear);
  };

  return (
    <div className="expense__filter">
      <div className="expense__filter--filter-by">
        <p>Filter by year</p>
        <select
          onChange={yearSelectHandler}
          type="number"
          name="year"
          id="year"
        >
          <option selected value="0">
            Select Year
          </option>
          {[...props.expenseYears].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <Chart
        labels={Months}
        values={monthlyExpense}
        maxValue={totalExpense}
        toDisplay={showChart}
      />
    </div>
  );
};

export default ExpenseFilter;
