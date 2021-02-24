import Button from 'react-bootstrap/Button';
import { FiCheck, FiTrash } from "react-icons/fi"

  


const CartButton = ({item, removeItem, changePrice}) => {     

    function dab( ){
    if(item.fixedPrice == false){
        // console.log('habve thibutton')
        return  <Button 
            variant="outline-primary" 
            onClick ={()=>changePrice(item.id, changePrice)}
            >                
            <FiCheck />
        </Button> 
    }
    
    }   
    //make so it can demove from basket
    //and allowe modifyin price if Modifiable=true
        return (
            <div className = 'cartbutton'>
            Number Selected: <h3>{item.stock}</h3> <br/>
            Price of Item: {item.price}
                    <br/>

            
                <Button 
                    variant="outline-primary" 
                    onClick ={()=>removeItem(item.id)}
                    >
                       <FiTrash />
                </Button>
                
                {item.type=='Service' && <Button 
                    variant="outline-primary" 
                    onClick ={()=>changePrice(item.id, changePrice)}
                    >                
                    <FiCheck />
                </Button> 
            }


            </div>
        );
}

export default CartButton