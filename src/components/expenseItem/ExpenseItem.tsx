import Card from '../card/Card';
import ExpenseDate from '../expenseData/ExpenseData';
import './ExpenseItem.css';

export default function ExpenseItem(props: any) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    )
}