
import Button from 'react-bootstrap/esm/Button';
import { FiPlus } from 'react-icons/fi';
import ACT from '../MainBar'

const ProdButton = ({prod, onClick}) => {  
 
        return (
            <div className = 'prodbutton'>
            
            {prod.price}
            <Button 
                variant="outline-primary" 
                onClick ={()=>onClick(prod.id)}
                >
                
                    <FiPlus />
            </Button>{' '}
                
            </div>

            
        );
}

export default ProdButton