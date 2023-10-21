import { useState } from 'react'

import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

import Card from '../UI/Card'

function ExpenseItem(props) {

    const deleteHandler = (event) => {
        event.target.parentElement.remove();
    }

    return (
        <Card>
            
            {/* <h3>ExpenseItem!</h3> */}
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location} />
            <button onClick={deleteHandler}>Delete</button>
        </Card>
    )
}

export default ExpenseItem