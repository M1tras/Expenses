import ExpenseItem from './Expenseitem.jsx'
import Card from './Card.jsx'
import './Expenses.css'

const Expenses = (props) => {
    
    return (
        <Card className='Expenses'>
            <ExpenseItem data={props.expenses[0]}/>
            <ExpenseItem data={props.expenses[1]}/>
        </Card>
    )
}
export default Expenses