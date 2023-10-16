import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

function ExpenseItem(props) {

    const deleteHandler = (event)=>{

        event.target.parentElement.remove();
            //  // Access the parent node of the button (the Card component)
            //  const card = event.target.parentNode;

            //  // Access the parent node of the Card component (the div containing the Card)
            //  const parent = card.parentNode;
     
            //  // Remove the Card component (including its children)
            //  parent.removeChild(card);

    }

    return (
        <Card>
            <h3>ExpenseItem!</h3>
           <ExpenseDate date = {props.date}/>
           <ExpenseDetails title = {props.title} amount = {props.amount} location = {props.location}/>
           <button onClick={deleteHandler}>Delete</button>
        </Card>
    )



}

export default ExpenseItem