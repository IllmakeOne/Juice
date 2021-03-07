import { FiCheck, FiEdit, FiTrash } from "react-icons/fi"
import ChangePriceB from './ChangePriceB'

import React, {  useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import { Button } from '@material-ui/core'
  


// _makeApiCall(endpoint) {
//     fetch(endpoint)
//       .then((response) => response.json())   // ----> you missed this part
//       .then((response) => this.setState({ response }));
//   }

const CartButton = ({item, removeItem, changeItem}) => {     

    const [open, setOpen] = useState(false); 

    const [dialogValue, setDialogValue] = useState({
      id: item.id,
      amount: 0
    });

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
        setDialogValue({
            id: item.id,
            price: item.price,
            amount: item.stock
        })
    }

    const updateCartItem = () => {
        
        changeItem(dialogValue)
        handleClose()
    }
  

     //make so it can demove from basket
    //and allowe modifyin price if Modifiable=true   onClick={toggleOpen(true)}
        return (
            <div className = 'cartbutton' >

                    Name: <h3>{item.name}</h3> <br/>
                    Number Selected: <h3>{item.stock}</h3> <br/>
                    Price of Item: <h3>{item.price}</h3><br/>


                <Button 
                    className='cart_button'
                    variant="contained" 
                    color="primary"
                    size="large"
                    // onClick ={()=>removeItem(item.id)}
                    onClick={()=>handleOpen()} 
                    >
                       <FiEdit size={25} />
                </Button>

                
                <Button 
                    className='cart_button'
                    variant="contained"
                    color="secondary"
                    size="large"
                    startIcon={<FiTrash size={25}/>}
                    onClick ={()=>removeItem(item.id)}
                    >
                </Button>
                

                <React.Fragment >
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" 
                            maxWidth='md?????????????'>
                        <form onSubmit={updateCartItem}>
                        <DialogTitle id="form-dialog-title">Modift Cart Item</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Change the price or the amount of an iteam
                            </DialogContentText>
                            <Button 
                                variant="contained"
                                onClick ={()=>setDialogValue({...dialogValue, amount: dialogValue.amount-1})}
                                >-
                            </Button>
                            <TextField
                                margin="dense"
                                id="amount"
                                value={dialogValue.amount}
                                onChange={(event) => setDialogValue({ ...dialogValue, amount: event.target.value })}
                                label="No. of Items"
                                type="number"
                            />
                              <Button 
                                variant="contained"
                                onClick ={()=>setDialogValue({...dialogValue, amount: dialogValue.amount+1})}
                                >+
                            </Button>
                            <br/>
                            {/* <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                value={dialogValue.price}
                                onChange={(event) => setDialogValue({ ...dialogValue, price: event.target.value })}
                                label="Price"
                                type="number"
                            /> */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button color="primary" onClick={updateCartItem}>{/*type="submit" */}
                                 Add
                            </Button>
                        </DialogActions>
                        </form>
                    </Dialog>
                </React.Fragment>

                
                
                {/* {item.type==='Service'?  */}

            </div>
        );
}

export default CartButton