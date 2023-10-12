import './ExpenseItems.css'

function ExpenseItem(){

    const expenseDate = new Date(2021, 2, 28)
    const expenseTitle = 'Car Insurance'
    const expensePrice = 624.74
    const expenseLocation = 'Delhi'


    return (
    <div className='mainCointainer'>
        <h3>ExpenseItem!</h3>
        <div className='date'>{expenseDate.toISOString()}</div>
        <div className='car_insuranse'>
            <h2>{expenseTitle}</h2>
            <h2>{expenseLocation}</h2>
            <div className='price'>${expensePrice}</div>
        </div>
    </div>
    )



}

export default ExpenseItem