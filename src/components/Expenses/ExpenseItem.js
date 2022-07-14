import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title);
  //console.log("ExpenseItem evaluated by React");
  //const clickHandler = () => {
  // setTitle("Updated!!");

  //console.log("title");
  //};
  //document.getElementById('root').addEventListener()
  //const expenseDate = new Date(2022, 6, 7);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 9842;
  //return <h2> Expense item</h2>;
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
