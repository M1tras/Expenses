import Expenses from './Expreses.jsx';
import './App.css';

const App = () => {
  const expenses = [ 
    {
      date: new Date(2024, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024, 10, 12),
      title: 'New Jeans',
      price: 20.99
    }
  ] 

  return (
    <div className='App'>
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
