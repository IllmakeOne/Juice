import React from 'react'
import ProdButton from './ProdButton'
import Button from 'react-bootstrap/esm/Button';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'




const ProdTypeSet = ({items, onClick}) => {

    const getSlice = () => {
        var ret = []
        items.map((el,index)=>{
                ret.push(<GridColumn width ={4} p={['m', 'm']}  >
                    <div key = {el.id} >
                             {/* <h3>{prod.name}</h3> */}{console.log(index)}
                             <ProdButton prod = {el}
                                 onClick = {onClick} />
                         </div>
                 </GridColumn>)

        })
        return ret
    }
    

    const makeGrid = () => {
        var gridsize = 4
        var ret =[]
        // console.log(ret)

        ret.push(<GridRow wrap='wrap'justify='around' >
                {getSlice()
                // ,console.log(ret)
                }
            </GridRow>)
        return ret
    }


    return (
        <div className='prodtypeset'>
            <h2>Type: {items[0].type}</h2>
            {makeGrid()}
        </div>
    )
}

export default ProdTypeSet
