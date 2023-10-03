import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props: any) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event: any) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
        console.log("enteredTitle ==>> ", enteredTitle);
    }
    const amountChangeHandler = (event: any) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event: any) => {   
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log("expenseData submitted ==>> ", expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}