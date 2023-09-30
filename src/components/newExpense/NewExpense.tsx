import './NewExpense.css';
import ExpenseForm from './expenseForm/ExpenseForm';

const NewExpense = (props: any) => {
    const saveExpenseDataHandler = (expenseData: any) => {
        const newExpenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        console.log("expenseData in expense new ==>> ", newExpenseData);
        props.onAddNewExpense(newExpenseData);
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;