import './ExpenseDetails.css'

function ExpenseDetails(props) {

    return (
        <div className='car_insuranse'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='price'>${props.amount}</div>
        </div>
    )


}

export default ExpenseDetails