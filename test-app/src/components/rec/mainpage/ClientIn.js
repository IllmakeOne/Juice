import { useState, useEffect } from 'react'
import { fetchClients } from '../../DBconn'

import Paper from '@material-ui/core/Paper'
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'

import { makeStyles } from '@material-ui/core/styles'

import { getSpecificClient } from '../../DBconn'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import DisplaySubs from '../pieces/DisplaySubs'
import SubHBox from '../../resources/clients/SubHBox'


function ClientIn({client}) {
    const C = useStyles()
    // let { url } = useRouteMatch()
    // let { clientId } = useParams()

    // const [client, setClient] = useState([])
    // const [crtClient, setCrtClient] = useState([])

    // useEffect(()=>{
    //     setClient(clientt)
    // },[])


    const details = () => {
        console.log(client)
        if(client != undefined && client != 0){
            return (
                <GridRow  direction='row' wrap='wrap' >
                    <GridColumn width={4} p = 's'>
                        {client.name}
                    </GridColumn>


                    <GridColumn p = 'm' width = {8}>
                        <SubHBox sub = {client.crtsub}/>
                    </GridColumn>
                </GridRow>

            )
        }  else {
            return (
                <h3>uncanned</h3>
            )
        }
    }


    return (
        <div>
            <br/>
            <Paper  elevation={3} className={C.orangeShadow}>
                {details()}

            </Paper>
            <br/>

            
        </div>
    )
}

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },

    orangeShadow: {
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    }

  }); 

export default ClientIn
