import ExpenseItem from './Expenseitem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter.jsx'
import { useState } from 'react'

function Expenses(props){

    const [filteredYear, setfilteredYear] = useState("2024")

    const changeHandler = (selectedYear) => {
        setfilteredYear(selectedYear)
        console.log("Year data in expenes.js: " + selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={changeHandler}/>
            {props.dataMain.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
            ))}
        </Card>
    )
}

export default Expenses