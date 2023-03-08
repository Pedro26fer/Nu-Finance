import Card from "../components/Card"
import './List.css'
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
        <div className="conteiner-list">
            <article className="menu-list">
                <h2>Resumo Financeiro</h2>
                <ul>
                    <li onClick={FilterAll} >Todos</li>
                    <li onClick={Filter} >Entrada</li>
                    <li onClick={FilterOut}>Saída</li>
                </ul>
            </article>
            <article className="main-list">
            <ul>
            {listTransactions.map((transaction, index)=> (
                <li key={index}>
                    <Card transaction={transaction} description={transaction.description} type={transaction.type} value={transaction.value} listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                </li>
            ))}
            </ul>
            </article>
        </div>
    )
}

export default List