import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import { Header } from './components/Header';
import TotalMoney from './components/TotalMoney';
import List from './List';

function App() {

  const [listTransactions,setListTransactions] = useState([])
  const [itensFiltered,setItensFiltered] = useState([])


  return (
    <div className="App">
      <Header/>
      <main className='main-page'>
        <article>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
          <TotalMoney listTransactions={listTransactions}/>
        </article>
        <article className='list'>
          <List apiListTransaction={listTransactions} listTransactions={itensFiltered.length === 0? listTransactions : itensFiltered} setListTransactions={setListTransactions} setItensFiltered={setItensFiltered}/>
        </article>
      </main>
    </div>
  );  
}

export default App;
