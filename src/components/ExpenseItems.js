import './ExpenseItems.css'

function ExpenseItem(props){

    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurance'
    const expensePrice = 624.74
    const expenseLocation = 'Delhi'


    return (
    <div className='mainCointainer'>
        <h3>ExpenseItem!</h3>
        <div className='date'>{props.date.toISOString()}</div>
        <div className='car_insuranse'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='price'>${props.amount}</div>
        </div>
    </div>
    )



}

export default ExpenseItem