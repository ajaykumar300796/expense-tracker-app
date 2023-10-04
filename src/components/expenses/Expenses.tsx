import { useState } from "react";
import Card from "../card/Card";
import ExpenseItem from "./expenseItem/ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./expensesFilter/ExpensesFilter";

export default function Expenses(props: any) {
    const [filteredData, setFilteredData] = useState('2020');

    let filteredYearInfo = "2019, 2021 & 2022";

    if (filteredData === "2019") {
        filteredYearInfo = '2020, 2021 & 2022';
    } else if (filteredData === '2021') {
        filteredYearInfo = '2019, 2020 & 2022';
    } else if (filteredData === '2022') {
        filteredYearInfo = '2019, 2020 & 2021';
    } else {
        filteredYearInfo = '2019, 2021 & 2022';
    }

    const changeExpenseFilterData = (filterData: any) => {
        setFilteredData(filterData);
        // console.log("filterData ==>> ", filterData);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredData}
                    onChangeExpenseFilterData={changeExpenseFilterData}
                />
                <p>Data for years {filteredYearInfo} are hidden.</p>
                {props.items.map((expense: any) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                ))}
                {/* {<ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>} */}
            </Card>
        </div>

    )
}