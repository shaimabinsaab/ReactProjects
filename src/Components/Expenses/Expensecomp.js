import "./Expensecomp.css";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expensecomp(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandeler}
        />
        <ExpenseChart expenses={filterdExpense} />
        <ExpenseList items={filterdExpense} />
      </Card>
    </div>
  );
}

export default Expensecomp;
