import { useState, useEffect, useContext } from 'react'

import { Autocomplete } from '@material-ui/lab'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import Switch from '@material-ui/core/Switch'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'


import { BsQuestionDiamond } from 'react-icons/bs'

import AutoCompAddItem from './AutoCompAddItem'
import { fetchProds, addItem } from '../../DBconn'
import { MyContext } from  '../../../App'


import { GridRow, GridColumn } from 'emotion-flex-grid'

function NewItem() {
    const [prods, setProds] = useState([])
    const [open, setOpen] = useState(false)
    const [crtItem, setCrtItem] = useState(emptyItem)

    const cx = useContext(MyContext)
    const C = useStyles()

    useEffect(()=>{
        const gett = async () => {
            const inprods = await fetchProds
            setProds({prods: inprods})
        }
        gett()
    },[])

    // useEffect(()=>{
    //     console.log(prods)
    // },[prods])

    const onSubmit = (e) => {
        e.preventDefault()   

        // pushTop({name, type, price, vat})
        console.log(crtItem)
        addItem(crtItem)
        setCrtItem(emptyItem)
    }


    const setTypeandVAT = (itemtyvat) => {
        setCrtItem({...crtItem, type: itemtyvat.name, vat: itemtyvat.vat})
        // console.log(JSON.stringify(itemtyvat) + ' in newItem')
    }

    
    // useEffect(()=>{
    //     console.log(crtItem)
    // },[crtItem])

    return (
        <div>
        <form className='add-form' onSubmit={onSubmit}>
            <GridRow >
                <GridColumn >

            <GridRow direction = 'column' align='center'>
                <GridColumn p='m'>
                    <h3>{cx.lg=='en'? 'Product Name':'Nume Produs'}</h3>
                </GridColumn>
                <GridColumn p='m'>
                    <h3>{cx.lg=='en'? 'Price':'Pret'}</h3>
                </GridColumn>
                <GridColumn p='m'>
                    <h3>{cx.lg=='en'? 'Product Image ':'Imagine Produs'}</h3>
                </GridColumn>
                <GridColumn p='m'>
                    <Accordion 
                            className={C.infolilbox}>
                        <AccordionSummary
                            // expandIcon={ <BsQuestionDiamond />}
                            >
                            <Typography><BsQuestionDiamond /></Typography>
                        </AccordionSummary>
                        <AccordionDetails 
                            // className={C.infobox}
                            >
                            <Typography>
                            {cx.lg=='en'?imageInstructionsEN:imageInstructionsRO}
                            </Typography>
                        </AccordionDetails>
                    </Accordion> 
                </GridColumn>
                <GridColumn p='m'>
                    <h3>{cx.lg=='en'? 'Fixed Price?':'Pret Fix?'}</h3>
                </GridColumn>
            </GridRow>
            </GridColumn>

            <GridColumn>
            <GridRow direction = 'column' align='center'>
                <GridColumn >
                    <Input 
                        type='text'
                        value={crtItem.image}
                        onChange={(e) => setCrtItem({...crtItem, image: e.currentTarget.value})}
                    />
                </GridColumn>
                <GridColumn >
                    <Input 
                        type='number'
                        inputProps={{min: 1, style: { textAlign: 'center' }}}
                        value={crtItem.price}
                        error={crtItem.price < 1}
                        onChange={(e) => setCrtItem({...crtItem, price: e.currentTarget.value})}
                    />
                </GridColumn>
            <GridColumn>
                    <img width = {110} height={110} 
                        src={crtItem.image==''?
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyx9AbdQE6YZ6lm5IAXeDtOz7wbSiXskAVekYJAsvVMQVsOXUquOrex5Rt9qArV6tojs&usqp=CAU':crtItem.image}
                        />
                </GridColumn>             
                <GridColumn >        
                    <Switch
                        checked={crtItem.fixedPrice}
                        onChange={(e) => setCrtItem({...crtItem, fixedPrice: e.target.checked })}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </GridColumn>
            </GridRow></GridColumn>
            </GridRow>

            {/* <GridRow align='center' >
                <input type='submit' value='Save Product' className='btn btn-block' />
            </GridRow> */}


            <input type='submit' value='Save Product' className='btn btn-block' />
            
        </form>

        </div>
    )
}

const emptyItem = {
    name: '',
    type: '',
    vat: -1,
    price: 0,
    stock: 0,
    fixedPrice: true, 
    fav: false,
    image: '',
}

const imageInstructionsEN='Find an image you want on google, right click on it and select "Copy image address" \n Paste the link in the box(right-hand side) and you are done!'

const imageInstructionsRO='Gaseste o imagine care ai vrea pe google. Click dreapta pe ea si selecteaza "Copy image address" \n Apasa "Paste" in cutia de text din dreapta si gata!'

const useStyles = makeStyles({

    infolilbox:{
        width: 200,

    },
    infobox:{
        width: 10,
    }
  });


export default NewItem


          