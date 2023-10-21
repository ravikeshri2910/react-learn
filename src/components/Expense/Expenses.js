
import { useState } from 'react'

import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItems'

function Expenses(props) {

    // console.log(props.items)

    const [filterYear, setFilterYear] = useState('2023')
    
    console.log(filterYear)

    let data = props.items.filter((expense)=>{
        return (+filterYear===expense.date.getFullYear())
    })

            console.log('data', data)

    const filterChangeHandler = (selectedYear) => {

        // console.log(props.items)
        // console.log(props.items[0].date.getFullYear())

        setFilterYear(selectedYear)


        // console.log('data', data)

        // console.log('selectedYear',selectedYear)
    }

    return (
        <Card>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

            <div>
                {data.map((expense, index) => (
                    <div >
                        <ExpenseItem
                        key = {expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                            location={expense.location}
                        />
                    </div>
                ))}

            </div>
          
        </Card>
    )
}

export default Expenses