import { FiCheck, FiEdit, FiTrash } from "react-icons/fi"
import ChangePriceB from './ChangePriceB'

import React, {  useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'


import { makeStyles } from '@material-ui/core/styles'
  
import { GridColumn, GridRow } from 'emotion-flex-grid'


// _makeApiCall(endpoint) {
//     fetch(endpoint)
//       .then((response) => response.json())   // ----> you missed this part
//       .then((response) => this.setState({ response }));
//   }

const CartButton = ({item, removeItem, changeItem}) => {  
    const C = useStyles()   

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
  

    const DialogContenence=() =>{
        return (
            <GridRow>
                <GridColumn>
                    <br/>
                    <Button 
                        variant="contained"
                        onClick ={()=>setDialogValue({...dialogValue, amount: dialogValue.amount-1})}
                        >-
                    </Button>
                </GridColumn>
                <GridColumn>
                    <TextField
                        className= {C.amountTextBox}
                        margin="dense"
                        id="amount"
                        value={dialogValue.amount}
                        onChange={(event) => setDialogValue({ ...dialogValue, amount: event.target.value })}
                        label="No. of Items"
                        type="number"
                    />
                </GridColumn>
                <GridColumn>
                    <br/>
                    <Button 
                        variant="contained"
                        onClick ={()=>setDialogValue({...dialogValue, amount: dialogValue.amount+1})}
                        >+
                    </Button>
                </GridColumn>                 
        </GridRow>
        )
    }

     //make so it can demove from basket
    //and allowe modifyin price if Modifiable=true   onClick={toggleOpen(true)}
        return (
            <div>

                    <h3>{item.name}</h3> 
                    <h4>{item.stock} items </h4> 
                    <h4>{item.price} RON</h4>


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
                           >
                        <form onSubmit={updateCartItem}>
                        <DialogTitle id="form-dialog-title">Change Number of Product</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Change the amount of an item in cart
                            </DialogContentText>
                            {DialogContenence()}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary"> 
                                Cancel
                            </Button>
                            <Button color="primary" onClick={updateCartItem}>{/*type="submit" */}
                                 OK
                            </Button>
                        </DialogActions>
                        </form>
                    </Dialog>
                </React.Fragment>

                
                
                {/* {item.type==='Service'?  */}

            </div>
        )
}



const useStyles = makeStyles({

    orangeShadow: {
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },

    amountTextBox: {
        width: 100,
        padding: 10,
        textAlign: 'center'
    },

  });  

export default CartButton