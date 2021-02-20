
import Button from 'react-bootstrap/esm/Button';
import { FiPlus } from 'react-icons/fi';

const ProdButton = ({prod, onClick}) => {  
 
        return (
            <div className = 'prodbutton'>
            {prod.stock,console.log(prod.id)}
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