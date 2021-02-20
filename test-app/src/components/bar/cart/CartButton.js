import Button from 'react-bootstrap/Button';
import ACTIONS from '../MainBar'
import { FiTrash } from "react-icons/fi"


const CartButton = ({item, dispatch}) => {     
    //make so it can demove from basket
    //and allowe modifyin price if Modifiable=true
        return (
            <div >
            Item name: {item.name} <br/>
            Number Selected: {item.stock} <br/>
            Price of Item: {item.price}

            <Button 
                    variant="outline-primary" 
                    onClick ={dispatch(
                        {type: ACTIONS.DELCARTITEM,
                            id: item.id})}
                    >
                    
                       <FiTrash />
                </Button>{' '}  

            </div>
        );
}

export default CartButton