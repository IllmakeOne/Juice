// import { Button } from '@material-ui/core';
import ProdTypeSet from './ProdTypeSet'
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from 'react'
import ProdButton from './ProdButton'
import React from 'react'

import Paper from '@material-ui/core/Paper';


import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

const  ProdSet = ({items, onClick}) => {

    
    const[crtType, setCrtType] = useState('Juice')
    const[uniqueTypes, setUniqueTypes] = useState([])

    useEffect(() => {
        const types = items.map((elem)=>elem.type).filter((el) => el != 'Service')
    
        setUniqueTypes(types.filter(function(elem, pos) {
            return types.indexOf(elem) == pos
        }))

        // console.log(crtType)
        // console.log(uniqueTypes)

        
    },[])   

    // const bruh = pordsWithCrtType

    return (
        
        <React.Fragment>
        <div className='prodset'>
            <GridRow warp='nowrap '>
            {/* {uniqueTypes} */} 
                <GridColumn className='changeitemtype' width={2}>
                {uniqueTypes.map((t)=> {
                    return(
                    <Button
                        onClick= {()=>setCrtType(t)}>
                        <h2>{t}</h2>
                    </Button>
                    )
                    })  
                }
                </GridColumn>
                <GridColumn width={13} >
                    <Paper style={{maxHeight: 690, overflow: 'auto'}} >   
                        <ProdTypeSet items =  
                            {items.filter((el) => {if(el.type == crtType) return el}).filter((el)=> el.stock > 0)}
                            //  type = {crtType}
                            onClick = {onClick}
                            />
                    </Paper>   
                </GridColumn>
            </GridRow>
        </div>
        </React.Fragment>
    )
}

export default ProdSet