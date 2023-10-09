import { useState } from "react";
import Card from "../card/Card";
import './Expenses.css'
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import ExpensesList from "./expensesList/ExpensesList";

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
        console.log("filterData ==>> ", filterData);
    }

    const filteredExpenses = props.items.filter((expense: any) => {
        return expense.date.getFullYear().toString() === filteredData;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={filteredData}
                    onChangeExpenseFilterData={changeExpenseFilterData}
                />
                <p>Data for years {filteredYearInfo} are hidden.</p>
                <ExpensesList filteredExpenses={filteredExpenses} />
                {/* {<ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>} */}
            </Card>
        </div>

    )
}