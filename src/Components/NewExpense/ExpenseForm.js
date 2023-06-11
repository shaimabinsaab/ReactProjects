import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");

  const [enterdAmount, setEnterdAmount] = useState("");

  const [enterdDate, setEnterdDate] = useState("");

  const titleChangeHandeler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandeler = (event) => {
    setEnterdAmount(event.target.value);
  };

  const dateChangeHandeler = (event) => {
    setEnterdDate(event.target.value);
  };
  const submitHandeler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };
  return (
    <form onSubmit={submitHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enterdDate}
            onChange={dateChangeHandeler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          cancel
        </button>
        <button type="submit">add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
