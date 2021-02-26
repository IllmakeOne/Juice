import Button from 'react-bootstrap/Button';
import { FiCheck, FiTrash } from "react-icons/fi"
import ChangePriceB from './ChangePriceB';

  


const CartButton = ({item, removeItem, changePrice}) => {     

     //make so it can demove from basket
    //and allowe modifyin price if Modifiable=true
        return (
            <div className = 'cartbutton'>
            Name: <h3>{item.name}</h3> <br/>
            Number Selected: <h3>{item.stock}</h3> <br/>
            Price of Item: <h3>{item.price}</h3>
                    <br/>

            
                <Button 
                    variant="outline-primary" 
                    onClick ={()=>removeItem(item.id)}
                    >
                       <FiTrash />
                </Button>
                
                <ChangePriceB 
                    item={item} 
                    changePrice ={changePrice}
                    />
                
                {/* {item.type==='Service'?  */}

            </div>
        );
}

export default CartButton