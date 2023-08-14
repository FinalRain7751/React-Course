import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredFormData, setEnteredFormData] = useState({});
  const [showForm, setShowForm] = useState(false);

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
    const submitter = e.nativeEvent.submitter;

    if (!showForm) {
      setShowForm(true);
      return;
    }

    if (showForm && submitter.innerHTML === "Add Expense") {
      let {
        expenseTitle: title,
        expenseAmount: amount,
        expenseDate: date,
      } = enteredFormData;

      if (title && amount && date) {
        props.onSaveExpenseData({ title, amount, date: new Date(date) });

        // Reset the form input fields and the stored variables
        setEnteredFormData({});
        setShowForm(false);
        e.target.reset();
      }
    }

    if (showForm && submitter.innerHTML === "Cancel") setShowForm(false);
  };

  // console.log(enteredFormData);

  return (
    <form className="expense__form" onSubmit={submitHandler}>
      {showForm && (
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
      )}

      <div className="expense__form--input">
        {showForm && (
          <button type="submit" className="expense__form--btn">
            Cancel
          </button>
        )}
        <button type="submit" className="expense__form--btn">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
