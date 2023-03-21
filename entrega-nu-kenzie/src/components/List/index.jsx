
// import './List.css'
import Card from '../Card'
import { ConteinerList, MenuList, TransactionsList } from './style'
function List({apiListTransaction,listTransactions,setListTransactions,setItensFiltered}){

    const Filter = ()=>{
       const filtered = apiListTransaction.filter((item) => item.type === 'Entrada')
       setItensFiltered(filtered)
    }

    const FilterOut = () => {
        const outs = apiListTransaction.filter((item) => item.type === 'Saída')
        setItensFiltered(outs)
    }

    const FilterAll = ()=>{
        setItensFiltered([])
    }

    

        
    return(
        <ConteinerList>
            <MenuList>
                <h2>Resumo Financeiro</h2>
                <ul>
                    <li onClick={FilterAll} >Todos</li>
                    <li onClick={Filter} >Entrada</li>
                    <li onClick={FilterOut}>Saída</li>
                </ul>
            </MenuList>
            <TransactionsList>
            <ul>
            {listTransactions.map((transaction, index)=> (
                <li key={index}>
                    <Card transaction={transaction} description={transaction.description} type={transaction.type} value={transaction.value} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                </li>
            ))}
            </ul>
            </TransactionsList>
        </ConteinerList>
    )
}

export default List