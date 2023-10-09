import { useState } from 'react';
import Card from '../../card/Card';
import ExpenseDate from '../expenseData/ExpenseData';
import './ExpenseItem.css';

export default function ExpenseItem(props: any) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log("title 1 ==>> ", title);
        setTitle("iPhone 14 pro max");
        console.log("title 2 ==>> ", title);
    }
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
                    <button onClick={clickHandler}>Change title</button>
                </div>
            </Card>
        </li>

    )
}