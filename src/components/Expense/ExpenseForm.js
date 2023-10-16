import './ExpenseForm.css'

const ExpenseForm = () => {

    const titleHandler =(event) =>{
        console.log(event.target.value)
    }
    const amountHandler =(event) =>{
        console.log(event.target.value)
    }
    const dateHandler =(event) =>{
        console.log(event.target.value)
    }
    const locationHandler =(event) =>{
        console.log(event.target.value)
    }

    return (
        <div >
            <form className='form'>
                <h3>Enter Expense</h3>

                <label>Title</label>
                <input onChange={titleHandler} placeholder='Enter Title'></input>

                <label>Amount</label>
                <input onChange={amountHandler} type='number' placeholder='Enter Amount'></input>

                <label>Date</label>
                <input onChange={dateHandler}  type='date' placeholder='Enter Date'></input>

                <label>location</label>
                <input onChange={locationHandler}  placeholder='Enter Location'></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm