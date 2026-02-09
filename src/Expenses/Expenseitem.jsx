import ExpenseDate from './ExpenseDate.jsx'
import Card from '../Card.jsx'
import './ExpenseItem.css'
import './ExpenseDate.css/'

const ExpenseItem = (props) => {
    console.log(props);
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.expenseData.date}/>
                <div className='expense-item__description'>
                    <h2>{props.expenseData.title}</h2>
                    <div className='expense-item__price'>{props.expenseData.price}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem