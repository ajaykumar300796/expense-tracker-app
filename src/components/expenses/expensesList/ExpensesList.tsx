import ExpenseItem from "../expenseItem/ExpenseItem";
import './ExpensesList.css';


export default function ExpensesList(props: any) {

    if (props.filteredExpenses.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                Found no expenses!
            </h2>
        )
    }

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense: any) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                ></ExpenseItem>
            ))}
        </ul>
    )
}