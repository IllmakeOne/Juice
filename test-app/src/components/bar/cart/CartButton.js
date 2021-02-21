import Button from 'react-bootstrap/Button';
import { FiTrash } from "react-icons/fi"


// function dab(test, changePrice, item, new ){}
//     if(test == false)
//         return  <Button 
//             variant="outline-primary" 
//             onClick ={()=>changePrice(item.id, changePrice)}
//             >                
//             <FiTrash />
//         </Button> 
    
// }


const CartButton = ({item, demoveItem, changePrice}) => {     
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
            {
            }


            </div>
        );
}

export default CartButton