import './App.css'
import Expenses from './Expenses/Expenses.jsx'
import NewExpense from "./NewExpense/NewExpense.jsx"
import { useState } from 'react' 

const DYMMY_EXPENSES = 
  [
    {
      id: 'id1',
      date : new Date(2026, 0, 10),
      title : 'Dirty Potato',
      price : 25.99
    },
    {
      id: 'id2',
      date : new Date(2026, 0, 2),
      title : 'Gold Potato',
      price : 99.99
    },
    {
      id: 'id3',
      date : new Date(2025, 6, 22),
      title : 'Diamond Potato',
      price : 99.99
    },
    {
      id: 'id4',
      date : new Date(2024, 1, 2),
      title : 'Legenday Potato',
      price : 9999.99
    }
  ]
const App = () => {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES)

  const addExpenseHanlder = (previousExpenses) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App
