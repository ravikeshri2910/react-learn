import { useState } from 'react'

import './ExpenseDetails.css'

function ExpenseDetails(props) {
    const [amount, setAmount] = useState(props.amount)

    // console.log('amount',amount)

    const amountHandler = () => {
        setAmount(100)
    }
    
    return (
        <div className='car_insuranse'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='price'>${amount}</div>
            <button onClick={amountHandler}>Amount Update</button>
        </div>

    )


}

export default ExpenseDetails