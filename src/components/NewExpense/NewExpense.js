import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

function NewExpense(props){

    const saveExpenseDataHandler = (enteredExpenseDate) =>{

        const expenseData = {
            ...enteredExpenseDate,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseData)
        // console.log(expenseData)
    }



    return (
        <div>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense