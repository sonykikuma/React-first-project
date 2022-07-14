import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const ChartDataPoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "march", value: 0 },
    { label: "april", value: 0 },
    { label: "may", value: 0 },
    { label: "june", value: 0 },
    { label: "july", value: 0 },
    { label: "august", value: 0 },
    { label: "september", value: 0 },
    { label: "october", value: 0 },
    { label: "november", value: 0 },
    { label: "december", value: 0 },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    ChartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={ChartDataPoints} />;
};

export default ExpensesChart;
