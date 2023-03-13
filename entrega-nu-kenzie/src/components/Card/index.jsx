import { BsFillTrashFill } from "react-icons/bs"
import { CardStyled } from './style'


function Card({description,value,type,listTransactions,setListTransactions,transaction}){
    
    const numberValue = parseFloat(value)

    function del(){
       const arr = listTransactions.filter((item)=> item !== transaction)
       setListTransactions(arr)
    }


    return(
        
        <CardStyled type={type}>
            <div className='card-description'>
                <h1>{description}</h1>
                <BsFillTrashFill className="trash" onClick={() => del()}/>
            </div>

            <div className='card-value'>
                <p>{type}</p>
                <span>{numberValue.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
            </div>
        </CardStyled>
        
    
    )
}

export default Card