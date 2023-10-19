
import { useState } from 'react'

import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItems'

function Expenses(props) {

    const [filterYear, setFilterYear] = useState('2020')

    const filterChangeHandler = ()=>{
        setFilterYear(selectedYear)
    }

    return (
        <Card>
            <ExpenseFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
           <ExpenseItem
           title = {props.items[0].title}
           />
        </Card>
    )
}

export default Expenses