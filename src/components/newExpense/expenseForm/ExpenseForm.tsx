import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState('')
    const titleChangeHandler = (event: any) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
        console.log("enteredTitle ==>> ", enteredTitle);
    }
    const amountChangeHandler = (event: any) => {
        // console.log(event.target.value);
    }
    const dateChangeHandler = (event: any) => {
        // console.log(event.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}