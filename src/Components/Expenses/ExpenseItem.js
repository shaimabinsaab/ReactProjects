import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">{props.amount}$</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
