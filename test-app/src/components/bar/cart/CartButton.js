import Button from 'react-bootstrap/Button';
import { FiCheck, FiTrash } from "react-icons/fi"

  


const CartButton = ({item, demoveItem, changePrice}) => {     

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
            <div >
            Number Selected: <h3>{item.stock}</h3> <br/>
            Price of Item: {item.price}

            <Button 
                    variant="outline-primary" 
                    onClick ={()=>demoveItem(item.id)}
                    >
                    
                       <FiTrash />
                </Button>
                
                {!item.fixedPrice && <Button 
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