import Card from "../components/Card"
import './List.css'
function List({listTransactions,setListTransaction}){
    console.log(listTransactions)
    //const [filter,setFilter] = useState(listTransactions)

    

    

        
    return(
        <div className="conteiner-list">
            <article className="menu-list">
                <h2>Resumo Financeiro</h2>
                <ul>
                    <li >Todos</li>
                    <li >Entrada</li>
                    <li>Saída</li>
                </ul>
            </article>
            <article className="main-list">
            <ul>
            {listTransactions.map((transaction, index)=> (
                <li key={index}>
                    <Card description={transaction.description} type={transaction.type} value={transaction.value}/>
                </li>
            ))}
            </ul>
            </article>
        </div>
    )
}

export default List