import ProdButton from './ProdButton'

const ProdSet = ({items, addtoCart}) => {

    return (
        
        <div className='prodset'>
            
            {items.prods.map((prod) => 
            (
            <div key = {prod.id} >
                <h3>{prod.name}</h3>
                <ProdButton prod = {prod}
                     onClick = {addtoCart} />
            </div>            
            ))}
            
        </div>
    )
}

export default ProdSet