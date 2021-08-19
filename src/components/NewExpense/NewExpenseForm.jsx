import { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    //Managing the multiple state variables ******************
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })

    const titleChangedHandler = (event) => {
        //Method 1 ***************
        setEnteredTitle(event.target.value)
        //Method 2 *************
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        //Method 3 ********************
        // setUserInput((prevstate) => {
        //     return {...userInput,
        //     enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
   

  return (
    <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title of expense">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangedHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="Amount of expense">Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="Date of expense">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit" className="new-expense__submit">Submit</button>
                <button type="button" onClick={props.onCancel} className="new-expense__submit">Cancel</button>
            </div>
        </div>
    </form>
  );
};

export default NewExpenseForm;
