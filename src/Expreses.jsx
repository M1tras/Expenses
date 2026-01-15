import ExpenseItem from './Expenseitem.jsx'
import './Expenses.css'

const Expenses = (props) => {
    
    return (
        <div className='Expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </div>
    )
}
export default Expenses