
import Button from 'react-bootstrap/esm/Button';
import { GridColumn } from 'emotion-flex-grid'
import { FiPlus } from 'react-icons/fi';

const ProdButton = ({prod, onClick}) => {  
 
        return (
            <div className = 'prodbutton' onClick ={()=>onClick(prod.id)}>
            {/* <GridColumn width = {4}> */}
                
            <h3>{prod.name}</h3>  <br/>
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