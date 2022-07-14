import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.2,
    date: new Date(2020, 6, 7),
  },
  { id: "e2", title: "New Tv", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 6, 7),
  },
  {
    id: "e4",
    title: "New Desk(wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //console.log("In App.js");
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //return React.createElement(                                                '
  //div',
  //{},
  // React.createElement('h2',{} ,"let's get started"),
  //React.createElement(Expenses, {items:expenses} )
  //)
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
