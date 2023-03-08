import { useState } from 'react'
import { FormStyled } from './style'

function Form({listTransactions,setListTransactions}){

    const [descriptionInput,setDescriptionIput] = useState('')
    const [valueInput,setValueInput] = useState('')
    const [typeSelected,setTypeSelected] = useState('--')
    const [id,setId] = useState(1)

    const handleTransactions = () => {
        const newTransaction = {}

        newTransaction.description = descriptionInput
        newTransaction.value = valueInput
        newTransaction.type = typeSelected
        newTransaction.id = id

        setListTransactions([...listTransactions,newTransaction])
        setId(id+1)

        setDescriptionIput('')
        setValueInput('')
        setTypeSelected('--')
    }

    return(
        <FormStyled onSubmit={(e) => e.preventDefault()}>
            <div className='description'>
                <label>Descrição</label>
                <input className='inputDescription' type="text" placeholder="Digite aqui sua descrição" value={descriptionInput} onChange={(evt) => setDescriptionIput(evt.target.value) }/>
                <span>Exemplo: Compra de roupas</span>
            </div>
            <div className='form-data'>
                <div className='money-value'>
                    <label>Valor</label>
                    <input type = 'number' placeholder="R$ 00,00" value={valueInput}  onChange={(evt) =>setValueInput(evt.target.value)}/>
                </div>
                <div>
                    <label>Tipo  de valor</label>
                    
                    <select 
                        name="sex" 
                        id="sex" 
                        value={typeSelected}
                        onChange={(evt) =>{

                            setTypeSelected(evt.target.value)

                        }}
                    >
                            <option value='selecione'>--</option>
                            <option value='Entrada'>Entrada</option>
                            <option value='Saída'>Saída</option>
                    </select>
                </div>
            </div>
                <button onClick={() => handleTransactions()}>Inserir valor</button>
        </FormStyled>
    )
}

export default Form