import React, { useEffect,  useState} from 'react'
import Cart from './cart/Cart'
import ProdSet from './products/ProdSet'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import StockHandler from './stockmanagement/StockHandler'
import AddSupplier from './stockmanagement/AddSupplier'
import Button from 'react-bootstrap/Button'
import AddStock from  './stockmanagement/AddStock'


export const BarScreen = {
    SELLBAR : 'sell bar',
    ADDSTOCK : 'add stock',
    ADDSUPPLIER : 'add supplier',
    ADDITEM : 'add item'

}

const _exportPdf = () => {

    html2canvas(document.querySelector("#capture")).then(canvas => {
       document.body.appendChild(canvas);  // if you want see your screenshot in body.
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       pdf.save("download.pdf"); 
   });

}

const API = 'http://localhost:3001/'

const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    return data
}
//new Branch here

const Phetch = async (method, endpoint, body) => {
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        // headers: {
        //   'content-type': 'application/json',
        //   accept: 'application/json',
        //   authorization: `Bearer ${await this.props.auth.getAccessToken()}`,
        // },
      });
      return await response.json();
    } catch (error) {
      console.error(error);

    }
  }
   


function MainBar({startScreen}) {

    const[bar, setBar] = useState({
        prods: [],
        cart: []
    })

    const[screen, setScreen] = useState(startScreen)

    const Caller= () =>{
        switch(screen){
            case BarScreen.ADDITEM:
                    return <StockHandler items={bar.prods} pushTop = {addItemtoDB}/>;
            case BarScreen.SELLBAR:
                    return <div>
                        <Cart  basket = {bar} demoveItem = {removeItemfromCart} />
                        <ProdSet items = {bar} addtoCart = {addtoCart}/> </div> 
            case BarScreen.ADDSUPPLIER:   
                    return <AddSupplier pushTop= {pushSupplier}/>
            case BarScreen.ADDSTOCK:   
                    return <AddStock pushTop= {pushItemtoStock}/>
                   
        }
    }

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


    // useEffect(() =>{
    //     console.log(bar)
    // }, [bar])



    const removeItemfromCart = async (id) => {
        const indexProd = bar.prods.findIndex(el  => el.id == id)
    
        const indexBask = bar.cart.findIndex(el  => el.id == id)
    
        bar.prods[indexProd].stock +=  bar.cart[indexBask].stock
        bar.cart.splice(indexBask,1)

        // console.log(bar)
       
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
                    prod.stock = prod.stock - 1
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
        // console.log(bar)
        setBar({prods: bruh, cart: auxBasket})
    }


    const sell = () => {
        bar.cart.map((el)=> {
            
        }
        
        )
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
        
    }

    const pushItemtoStock = (item) =>{
        console.log(item)
    }

    /*onSubmit = { } */
     /* onChange={e=>setname(e.target.value)<form>
                <input type="text" value = {ACTION.GET}/>
            </form>*/
    return (
        <div id='capture' >

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
            {/* <Header t
            itle= {JSON.stringify(bar,null)}/> */}
            {/* {JSON.stringify(bar,null)} */}
            {/* {console.log(bar)}
            <Cart  basket = {bar} demoveItem = {removeItemfromCart} />
            <ProdSet items = {bar} addtoCart = {addtoCart}/> */}
            {/* <StockHandler pushTop = {addItemtoDB}/> */}

            {Caller()}
        </div>   
    )
}

export default MainBar
