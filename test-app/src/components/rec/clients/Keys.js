import React, { useState, useEffect } from 'react'
import { fetchKeys } from '../../DBconn'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'
import { pink, lightBlue} from '@material-ui/core/colors';
import { Key } from 'react-feather'


const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    }
  });

function Keys() {

    const classes = useStyles();
    const [keys, setKeys] = useState([])

    useEffect(()=>{
        const Aux = async() => {
            var serverKeys = await fetchKeys()
            setKeys(serverKeys)
            // console.log(serverKeys)
        }
        Aux()
    },[])

    // const switchColor = (id)=>{

    //     const aux = keys
    //     aux.map(el => el.id == id )
    // }

    const createButton = ({id, assigned}) => {
        return(
            <div key = {id} className={assigned? 'assigned':'unassigned'}>
                {/* {createButton(key)} */}
                <Button className='dab'
                    size="large"
                    onClick={()=>Switch(id)}>
                        <h3>{id} </h3><br/>
                                {/* <Key size={15}/> */}
                </Button>
            </div>
        )
    }

    const getSlice = () => {
        var ret = []
        keys.map((key,index) => {
                ret.push(
                <GridColumn width ={1.1} p={['l', 'l']}  >
                    {createButton(key)}
                 </GridColumn>)

        })
        return ret
    }

    const makeGrid = () => {
        var ret =[]
        // console.log(ret)

        ret.push(<GridRow wrap='wrap'justify='around' >
                {getSlice()
                // ,console.log(ret)
                }
            </GridRow>)
        return ret
    }
    
    const Switch = (id) => {
        console.log(id)
    }

    return (
        <div>
            <h1>Kyes</h1>
                <div >
                    <GridRow warp='nowrap '>
                        {keys? makeGrid():null}
                    </GridRow>
                </div>
        </div>
    )
}

export default Keys
