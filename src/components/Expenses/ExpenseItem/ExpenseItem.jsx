/**
 @author arthurmita
 created 29/07/2021 at 16:17
 **/
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={date} />
        <div className={"expense-item__description"}>
          <h2>{title}</h2>
          <div className={"expense-item__price"}>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
