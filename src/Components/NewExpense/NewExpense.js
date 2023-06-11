import "./NewExpense.css";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEdeted, setIsEdeted] = useState(false);
  const saveExpenseHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEdeted(false);
  };
  const startEditingHandeler = () => {
    setIsEdeted(true);
  };

  const stopEditingHandeler = () => {
    setIsEdeted(false);
  };

  return (
    <div className="new-expense">
      {!isEdeted && (
        <button onClick={startEditingHandeler}>Add new Expense</button>
      )}
      {isEdeted && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandeler}
          onCancel={stopEditingHandeler}
        />
      )}
    </div>
  );
};

export default NewExpense;
