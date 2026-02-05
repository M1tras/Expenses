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
            <ExpensesFilter onChangeFilter={changeHandler}/>
            {
                props.expenses.map((expense) => {
                    return<ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
        </Card>
    )
}

export default Expenses