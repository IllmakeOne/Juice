
import { GridColumn } from 'emotion-flex-grid'
import { FiPlus } from 'react-icons/fi';

const ProdButton = ({prod, onClick}) => {  
 
        return (
            <div className = 'prodbutton' onClick ={()=>onClick(prod.id)}>
            {/* <GridColumn width = {4}> */}
                
            <h3>{prod.name}   </h3>
            <img width = {40} height={40} src={prod.image}></img>  <br/>
            Price: {prod.price} <br/>
            Stock: {prod.stock}

            {/* <Button 
                variant="outline-primary" 
                onClick ={()=>onClick(prod.id)}
                >
                
                    <FiPlus />
            </Button>{' '} */}
            {/* </GridColumn> */}
                
            </div>

            
        );
}

export default ProdButton