import React from "react"

import './AddExpenseButton.css'



function AddExpenseButton(props){

    const AddExpense = () =>{
        console.log('here')
        let d = true
        props.clicked(d)
    }

    return(
        <div>
        <button onClick={AddExpense}>Add Expense</button>
        </div>
    )
}

export default AddExpenseButton