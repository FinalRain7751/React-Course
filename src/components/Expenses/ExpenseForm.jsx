import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //   const [enteredTitle, setEnteredTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [enteredDate, setEnteredDate] = useState("");

  const [enteredFormData, setEnteredFormData] = useState({});

  const formDataChangeHandler = (e) => {
    const targetName = e.target.name;
    setEnteredFormData((prevState) => {
      prevState[targetName] = e.target.value;
      //   console.log(prevState);
      return prevState;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let {
      expenseTitle: title,
      expenseAmount: amount,
      expenseDate: date,
    } = enteredFormData;
    // console.log(title, amount, date);
    props.onSaveExpenseData({ title, amount, date: new Date(date) });

    // Reset the form input fields and the stored variables
    setEnteredFormData({});
    e.target.reset();
  };

  // console.log(enteredFormData);

  return (
    <form className="expense__form" onSubmit={submitHandler}>
      <div className="expense__form--input">
        <div className="expense__form--input-field">
          <label htmlFor="expenseTitle">Title</label>
          <input
            type="text"
            name="expenseTitle"
            onChange={formDataChangeHandler}
          />
        </div>
        <div className="expense__form--input-field">
          <label htmlFor="expenseAmount">Amount</label>
          <input
            type="number"
            name="expenseAmount"
            onChange={formDataChangeHandler}
          />
        </div>
        <div className="expense__form--input-field">
          <label htmlFor="expenseDate">Date of expense</label>
          <input
            type="date"
            name="expenseDate"
            min="01-01-2019"
            max="31-12-2024"
            onChange={formDataChangeHandler}
          />
        </div>
      </div>

      <div className="expense__form--input">
        <button type="submit" className="expense__form--btn">
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
