import './Card.css'
function Card({description,value,type}){


    return(
        
        <div className={`card ${type}`}>
            <div className='card-description'>
                <h1>{description}</h1>
                <p>{type}</p>
            </div>

            <div className='card-value'>
                <span>R${value}</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ieSgwXUfxCAl2vvrj65-v-qYNJ6i1BNO9g&usqp=CAU" alt="Excluir" />
            </div>
        </div>
        
    
    )
}

export default Card