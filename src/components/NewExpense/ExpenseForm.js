import React,{ useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')

    // other way of creating so many state 

    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : '',
    //     location : '',

    // })

    const submitHandler = (event)=>{
        event.preventDefault()
        const expense = {
            title : title,
            amount : amount,
            date : new Date(date),
            location : location
        }

        console.log(expense)
    }

    const titleHandler =(event) =>{
        setTitle(event.target.value)

        //way of geting the state 
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })

        // setUserInput((prevState)=>{
        //     return {...prevState,title : event.target.value}
        // })
        console.log(event.target.value)
    }
    const amountHandler =(event) =>{
        setAmount(event.target.value)
        console.log(event.target.value)
    }
    const dateHandler =(event) =>{
        setDate(event.target.value)
        console.log(event.target.value)
    }
    const locationHandler =(event) =>{
        setLocation(event.target.value)
        console.log(event.target.value)
    }

    

    return (
        <div >
            <form className='form' onSubmit={submitHandler}>
                <h3>Enter Expense</h3>

                <label>Title</label>
                <input onChange={titleHandler} placeholder='Enter Title'></input>

                <label>Amount</label>
                <input type='number'  onChange={amountHandler} placeholder='Enter Amount'></input>

                <label>Date</label>
                <input onChange={dateHandler}  type='date' placeholder='Enter Date'></input>

                <label>location</label>
                <input onChange={locationHandler}  placeholder='Enter Location'></input>

                <button >Submit</button>
            </form>
        </div>
    )
}

export default ExpenseForm