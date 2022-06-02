import { useState } from 'react'
import './Form.css'

function Form({listTransactions,setListTransactions}){

    const [descriptionInput,setDescriptionIput] = useState('')
    const [valueInput,setValueInput] = useState(0)
    const [typeSelected,setTypeSelected] = useState('Entrada')
    const [id,setId] = useState(1)

    const handleTransactions = (description,value,type) => {

        const newTransaction = {}

        newTransaction.description = descriptionInput
        newTransaction.value = valueInput
        newTransaction.type = typeSelected
        newTransaction.id = id

        setListTransactions([...listTransactions,newTransaction])
        setId(id+1)


    }

    return(
        <form className='main-form' onSubmit={(e) => e.preventDefault()}>
            <div className='description'>
            <label>Descrição</label>
            <input className='inputDescription' type="text" placeholder="Digite aqui sua descrição" value={descriptionInput} onChange={(evt) => setDescriptionIput(evt.target.value) }/>
            <span>Exemplo: Compra de roupas</span>
            </div>
            <div className='form-data'>
                <div className='money-value'>
                <label>Valor</label>
                <input type = 'number' placeholder="R$ 00,00" value={valueInput} onChange={(evt) =>setValueInput(evt.target.value)}/>
                </div>
                <div className='type-value'>
                    <label>Tipo  de valor</label>
                    
                    <select 
                        name="sex" 
                        id="sex" 
                        value={typeSelected}
                        onChange={(evt) =>{

                            setTypeSelected(evt.target.value)

                        }}
                    >
                            <option value='Entrada'>Entrada</option>
                            <option value='Saída'>Saída</option>
                    </select>
                </div>
            </div>
                <button className='btn-inserir' onClick={() => handleTransactions(descriptionInput,typeSelected,valueInput)}>Inserir valor</button>
        </form>
    )
}

export default Form