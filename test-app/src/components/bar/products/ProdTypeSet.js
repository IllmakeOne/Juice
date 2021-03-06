import React from 'react'
import ProdButton from './ProdButton'
import Button from 'react-bootstrap/esm/Button';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'




const ProdTypeSet = ({items, onClick}) => {

    const getSlice = (index) => {
        var ret = []
        items.map((el,index)=>{
            if(!index % 4==0){
                ret.push(<GridColumn width ={4} p={['m', 'm']}  >
                    <div key = {el.id} >
                             {/* <h3>{prod.name}</h3> */}{console.log(index)}
                             <ProdButton prod = {el}
                                 onClick = {onClick} />
                         </div>
                 </GridColumn>)
            }

        })
        return ret
    }
    

    const makeGrid = () => {
        var gridsize = 4
        var ret =[]
        var i, j
        // for (i = 0;i <items.length ;i= i+4){
        //     ret.push(<GridRow wrap='wrap'>
        //         {getSlice(i)
        //         // ,console.log(ret)
        //         }
        //     </GridRow>)
        // }
        // console.log(ret)

        ret.push(<GridRow wrap='wrap'justify='around' >
                {getSlice(i)
                // ,console.log(ret)
                }
            </GridRow>)
        return ret
    }


    return (
        <div className='prodtypeset'>
            <h2>Type: {items[0].type}</h2>
            {makeGrid()}
        
            {/* <GridRow warp='nowrap '> */}
            {/*items.map((prod) => {
                        return (
                    <div key = {prod.id} >
                        {/* <h3>{prod.name}</h3> 
                        <ProdButton prod = {prod}
                            onClick = {onClick} />
                    </div>
                        )})*/
             }
             {/* </GridRow> */}
        </div>
    )
}

export default ProdTypeSet
