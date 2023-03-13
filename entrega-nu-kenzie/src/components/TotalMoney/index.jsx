import { useEffect, useState } from 'react'
import { TotalValue } from './style'


function TotalMoney({listTransactions}){
    const [sumValues,setSumValues] = useState(0)

   useEffect(()=>{
        if(listTransactions){
            const total = listTransactions.reduce((acc,{value,type}) => {

                if(type === 'Entrada'){
            
                    return  Number(value) + acc
            
                }
                 else {
                     return  Number(value * -1) + acc
                    }
            
                },0)
            
                setSumValues(total)
        }

   },[listTransactions])


    return (
        <>
            <TotalValue>
                <div className='value'>
                <h1>Valor Total:</h1>
                <p>{sumValues.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>

                <div className='warning-value'>
                <span>O valor se refere ao saldo</span>
                </div>
            </TotalValue>
                    
        </>
    )
}

export default TotalMoney