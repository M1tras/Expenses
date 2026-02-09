import ExpenseItem from './Expenseitem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter.jsx'
import { useState } from 'react'
import ExpensesList from './ExpensesList.jsx'

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState("2024")

    const changeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
    }
    
    const filteredData = props.expenses.filter((expense) => String(expense.date.getFullYear()) === filteredYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeHandler}/>
            <ExpensesList expenses={filteredData}/>
        </Card>
    )
}

export default Expenses