import React, { useEffect,  useState} from 'react'
import Cart from './cart/Cart'
import ProdSet from './products/ProdSet'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import AddSupplier from '../resources/restocking/AddSupplier'
import Button from 'react-bootstrap/Button'

import { GridRow, GridColumn } from 'emotion-flex-grid'


import { fetchProds } from '../DBconn'
import AddStock from '../resources/restocking/AddStock'


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
            case BarScreen.SELLBAR:
                // selling cart and item display
                    return <div> 
                            {bar ? <div>
                                <GridRow wrap='wrap' >
                                    <GridColumn width={9}>
                                         <ProdSet items = {bar.prods} onClick = {addtoCart} changeFav ={changeFav}/>
                                    </GridColumn>
                                    <GridColumn width={3} className='test'>
                                        <Cart  basket = {bar.cart} 
                                            removeItem = {removeItemfromCart}
                                            removeAllCart = {removeAllCart} 
                                            changeItem = {changeCartItem}
                                            addBulkItem={addBulkItem}/>
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


    
    const removeAllCart = () => {
        const auxProds = bar.prods
        const auxBasket = bar.cart
        auxBasket.map((el) => {
            auxProds.map((prd)=>{
                if(prd.id==el.id)
                    prd.stock+=el.stock
            })
        })

        setBar({prods: auxProds, cart: []})

    }

    const addItem = (item) => {
        // console.log(item)
    }

    const changeFav = (id) => {
        const aux = bar.prods.map((el)=>{
            if(el.id == id){
                return {...el, fav: !el.fav}
            } else {
                return el
            }
        })
        setBar({prods: aux, cart: bar.cart})   
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

    const addtoCart =  (id) => {
        // console.log(id)
        var flag = 0
        const bruh = bar.prods
        const auxBasket = bar.cart
        var aux = null
       bruh.map(
            function(prod) {
                if(prod.id == id){
                    console.log(prod.stock)
                    if(prod.type != 'Service' && prod.stock > 0){
                        prod.stock = prod.stock - 1
                        aux = {
                            id: prod.id,
                            name: prod.name,
                            stock: 1,
                            price: prod.price,
                            fixedPrice: prod.fixedPrice
                        }
                    } else {
                        flag = 1
                        console.log('dirtier')
                    }
                    
                }
            })
        
        if(flag == 0){console.log('dirty')
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
    }

    const addBulkItem =  (cart) => {
        // console.log(cart)
        let auxProds = bar.prods
        let result = []
        cart.map(element => {
            var item = bar.prods.filter(el=>el.id===element.id)[0]
            var aux = item
            if(item.stock > 0){
                if(element.stock <= item.stock){
                    aux = {...aux, stock: element.stock}
                    auxProds.forEach(el=>{if(el.id == element.id) el.stock -= element.stock})
                } else {
                    aux = {...aux, stock: item.stock}
                    auxProds.forEach(el=>{if(el.id == element.id) el.stock = 0})
                }
                result.push(aux)    
            }
        })

        setBar({prods: auxProds, cart: result})
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
        // console.log("bruh")
        // console.log(to_send)

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
        <div id='capture' className='mainbar' >
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
