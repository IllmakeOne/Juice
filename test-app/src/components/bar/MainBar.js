import React, { useEffect,  useState} from 'react'
import Cart from './cart/Cart'
import ProdSet from './products/ProdSet'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import StockHandler from './stockmanagement/StockHandler'
import AddSupplier from './stockmanagement/AddSupplier'
import Button from 'react-bootstrap/Button'
import AddStock from  './stockmanagement/AddStock'

import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'


import { fetchProds } from '../DBconn'


// import Box from '@material-ui/core/Box';


export const BarScreen = {
    SELLBAR : 'sell bar',
    ADDSTOCK : 'add stock',
    ADDSUPPLIER : 'add supplier',
    ADDITEM : 'add item'

}

   
//----------------------------------------Main Component--------------------------------------------------------------------------

function MainBar({startScreen}) {

    const[bar, setBar] = useState({
        prods: [],
        cart: []
    })

    const[screen, setScreen] = useState(startScreen)

    const Caller = () =>{
        switch(screen){
            case BarScreen.ADDITEM:
                //page to add item to invetory
                    return <StockHandler prods={bar.prods} pushTop = {addItemtoDB}/>;
            case BarScreen.SELLBAR:
                // selling cart and item display
                    return <div> 
                            {bar ? <div>
                                <GridRow wrap='wrap'>
                                    <GridColumn width={8}>
                                         <ProdSet items = {bar.prods} onClick = {addtoCart}/>
                                    </GridColumn>
                                    <GridColumn width={4}>
                                        <Cart  basket = {bar.cart} 
                                            removeItem = {removeItemfromCart}
                                            removeAllCart = {removeAllCart} 
                                            changeItem = {changeCartItem}/>
                                    </GridColumn>
                                </GridRow>
                                </div>:null}
                        </div>
            case BarScreen.ADDSUPPLIER:   
                //add a new supplier to DB
                    return <AddSupplier pushTop= {pushSupplier}/>
            case BarScreen.ADDSTOCK:  
                //add new sellable item
                    return <AddStock pushTop={addItem}/>
                   
        }
    }

//----------------------------------------Methhods--------------------------------------------------------------------------

    // //get from db and pas son
    useEffect(() =>{
        const getProds = async () => {
            const serverProds = await fetchProds()
            setBar({
                prods: serverProds,
                cart: []
            })
        }
        getProds()
    
    // setTimeout(_exportPdf(),10000)
    }, [])


    
    const removeAllCart = async () => {
        bar.cart.map((el) => {
            bar.prods.map((prd)=>{
                if(prd.id==el.id)
                    prd.stock+=el.stock
            })
        })

        setBar({prods: bar.prods, cart: []})

    }

    const addItem = (item) => {
        console.log(item)
    }


    const removeItemfromCart = async (id) => {

        const indexProd = bar.prods.findIndex(el  => el.id == id)
    
        const indexBask = bar.cart.findIndex(el  => el.id == id)
    
        bar.prods[indexProd].stock +=  bar.cart[indexBask].stock
        bar.cart.splice(indexBask,1)

        // console.log(bar)
       
        setBar({prods: bar.prods, cart: bar.cart})
    }

    const changeCartItem =  ({id, price, amount}) => {
        // console.log('id' +id +' price ' + price + ' amount ' + amount)
        var difference = 0
        bar.cart.forEach((el)=>{
            if(el.id == id){
                difference = amount - el.stock
                el.stock = amount
                el.price = price
            }
        })

        bar.prods.forEach((el)=>{
            if(el.id == id){
                el.stock -= difference
            }
        })

        setBar({prods: bar.prods, cart: bar.cart})
    }

    const changeCartItemPrice =  ({id, price}) => {
        // console.log(id)
        bar.cart.forEach((el)=>{
            if(el.id == id){
                el.price = price
            }
        })
        setBar({prods: bar.prods, cart: bar.cart})
    }
     
    const addtoCart = async  (id) => {
        // console.log(id)
        const bruh = bar.prods
        const auxBasket = bar.cart
        var aux = null
       bruh.map(
            function(prod) {
                if(prod.id == id){
                    if(prod.type != 'Service'){
                        prod.stock = prod.stock - 1
                    }
                    aux = {
                        id: prod.id,
                        name: prod.name,
                        stock: 1,
                        price: prod.price,
                        fixedPrice: prod.fixedPrice
                    }
                    
                }
            })
            
        const indexof = auxBasket.findIndex(elem => elem.id == id)
        if(indexof== -1){
            //if it finds it , increase basket stock
            auxBasket.push(aux)
        } else {
            //if it doesnt, add it wiht stock 1
            auxBasket[indexof].stock += 1
        }
        // console.log(bar.cart)
        setBar({prods: bruh, cart: auxBasket})
    }


    const aux = (item) => {
        console.log(item.id)
    }

    /**
     * adds item to db, with stock .
     * @param {*} item 
     */
    const addItemtoDB = (item) =>{
        const to_send = {
            fixedPrice: item.type=='Service'? false : true,
            //fixed price is false if the item is a service
            stock : 0,
            ...item
        }
        // Phetch('post', `prods/`, to_send
        console.log("bruh")
        console.log(to_send)

    }

    /**
     * send the new supplier to the DB
     * @param {} item 
     */
    const pushSupplier = (item) =>{
        console.log(item)
        //TODO
        
    }

    const pushItemtoStock = (item) =>{
        console.log(item)
        //TODO
    }

    /*onSubmit = { } */
     /* onChange={e=>setname(e.target.value)<form>
                <input type="text" value = {ACTION.GET}/>
            </form>*/
    return (
        <div id='capture' className='mainbar' tyle={{ width: '100%' }} >
            <Button 
                    className ='switchToSellBar'
                    variant="outline-primary" 
                    onClick ={() => setScreen(BarScreen.SELLBAR)}
                    > 
                    Bar
            </Button>
            <Button 
                    className ='switchToAddsupplier'
                    variant="outline-primary" 
                    onClick ={() => setScreen(BarScreen.ADDSUPPLIER)}
                    > 
                    Add Supplier
            </Button>
            <Button 
                    className ='switchToAddInvItem'
                    variant="outline-primary" 
                    onClick ={() => setScreen(BarScreen.ADDITEM)}
                    > 
                    Add Inventory Item
            </Button>
            <Button 
                    className ='switchToAddStock'
                    variant="outline-primary" 
                    onClick ={() => setScreen(BarScreen.ADDSTOCK)}
                    > 
                    Add Inventory
            </Button>
            {Caller()}
        </div>   
    )
}

export default MainBar
