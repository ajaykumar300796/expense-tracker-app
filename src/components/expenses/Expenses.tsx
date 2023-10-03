import Card from "../card/Card";
import ExpenseItem from "./expenseItem/ExpenseItem";
import './Expenses.css'

export default function Expenses(props: any) {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}> </ExpenseItem>
        </Card>
    )
}