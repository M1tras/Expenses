import './App.css'
import Expenses from './Expenses/Expenses.jsx'
import NewExpense from "./NewExpense/NewExpense.jsx"

function App() {
  const expenses = 
  [
    {
      date : new Date(2026, 0, 10),
      title : 'Dirty Potato',
      price : 25.99
    },
    {
      date : new Date(2026, 0, 2),
      title : 'Gold Potato',
      price : 99.99
    },
    {
      date : new Date(2025, 6, 22),
      title : 'Diamond Potato',
      price : 99.99
    },
    {
      date : new Date(2025, 1, 2),
      title : 'Legenday Potato',
      price : 9999.99
    }
  ]
  const addExpenseHanlder = (expense) => {
    console.log('app.jsx data')
    console.log(expense)
  }

  return (
    <div className='app'>
      <NewExpense onAddExpense={addExpenseHanlder}/>
      <Expenses dataMain={expenses}/>
    </div>
  )
}

export default App
