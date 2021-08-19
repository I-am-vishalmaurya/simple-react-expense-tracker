import { React, useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const eneteredExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
    setShowForm(false);
  };

  const addExpenseFormHandler = () => {
    setShowForm(true);
  };
  const cancelButtonHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm ? (
        <button onClick={addExpenseFormHandler}>Add New Expense</button>
      ) : (
        <NewExpenseForm
          onSaveExpenseData={eneteredExpenseData}
          onCancel={cancelButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
