import React from 'react';
import './App.css';
import ExpenseItem from './components/expenseItem/ExpenseItem';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {
  const expenses: any[] = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addNewExpense = (newExpense: any) => {
    console.log("newExpense on app.js ==>> ", newExpense);
  }

  return (
    <div>
      <NewExpense onAddNewExpense= {addNewExpense}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
