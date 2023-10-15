import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

function ExpenseItem(props) {


    return (
        <div className='mainCointainer'>
            <h3>ExpenseItem!</h3>
           <ExpenseDate date = {props.date}/>
           <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location}/>
        </div>
    )



}

export default ExpenseItem