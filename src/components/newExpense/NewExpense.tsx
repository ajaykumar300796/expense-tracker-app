import { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';

const NewExpense = (props: any) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (expenseData: any) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        // console.log("expenseData in expense new ==>> ", newExpenseData);
        props.onAddNewExpense(newExpenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const cancelExpenseForm = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelExpenseForm} />}
        </div>
    )
}

export default NewExpense;