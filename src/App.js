
import React, {useState} from "react";

import ExpenseFilter from "./components/Expense/ExpenseFilter";
import ExpenseItem from "./components/Expense/ExpenseItems";
import Expenses from "./components/Expense/Expenses";
import NewExpense from './components/NewExpense/NewExpense'
import AddExpenseButton from "./components/NewExpense/AddExpenseButton";


const DUMMY_EXPENSE = [
  {
    id : 'e1',
    title: 'Car Insuranse',
    amount: '28',
    date: new Date(2022, 2, 28),
    location: 'Delhi'
  },
  {
    id : 'e2',
    title: 'Food',
    amount: '65',
    date: new Date(2023, 3, 28),
    location: 'Mumbai'
  },
  {
    id : 'e3',
    title: 'Hotel',
    amount: '10',
    date: new Date(2020, 3, 30),
    location: 'Goa'
  },
  {
    id : 'e4',
    title: 'Travel',
    amount: '20',
    date: new Date(2022, 4, 27),
    location: 'Assam'
  },
]

function App() {

  const [expenses , setExpenses] = useState(DUMMY_EXPENSE)
  const [AddExpense , setAddExpense] = useState(false)

  const addExpenseHAndler = (expenseData) => {

    console.log('expenseData'+JSON.stringify(expenseData))

    setExpenses( (DUMMY_EXPENSE)=>{
      return [expenseData, ...DUMMY_EXPENSE]
    })
  }

  const expenseState = (state) =>{
    setAddExpense(state)
  }

  const cancelFormHandler = (state) =>{
    setAddExpense(state)
  }

  // console.log('AddExpense'+AddExpense)

  let form = <AddExpenseButton clicked = {expenseState}/>

  if (AddExpense === true){
    form = <NewExpense onAddExpense = {addExpenseHAndler} onCancel = {cancelFormHandler}/> // {/*form*/}
  }


  return (
    <div>
      <h2>Let's get started!</h2>
    
      {form}

      <Expenses items = {expenses} /> {/*deltais of expenses*/}
    </div>
  );
}

export default App;
