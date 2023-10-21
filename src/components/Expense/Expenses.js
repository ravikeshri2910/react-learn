
import { useState } from 'react'

import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItems'

function Expenses(props) {

    console.log(props.items)

    const [filterYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    return (
        <Card>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler} />

            <div>
                {props.items.map((expense, index) => (
                    <div >
                        <ExpenseItem
                            key={expense.id}
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