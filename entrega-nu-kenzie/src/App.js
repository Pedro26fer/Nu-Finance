import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TotalMoney from './components/TotalMoney';
import List from './List';

function App() {
  
  const [listTransactions,setListTransaction] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <h1>Nu Kenzie</h1>
        <button>Inicio</button>
      </header>
      <main className='main-page'>
        <article>
          <Form listTransactions={listTransactions} setListTransactions={setListTransaction}/>
          <TotalMoney listTransactions={listTransactions}/>
        </article>
        <article className='list'>
          <List listTransactions={listTransactions} setListTransactions={setListTransaction}/>
        </article>
      </main>
    </div>
  );  
}

export default App;
