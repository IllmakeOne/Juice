import { useState, useEffect} from 'react'

import Scanner from './Scanner'
import ClientIn from './ClientIn'

import Keys from '../clients/Keys'


import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'


import { ListItemIcon, Typography } from '@material-ui/core';


import loading from '../loading.gif'
import Capture from './pieces/Capture.PNG'
import { makeStyles } from '@material-ui/core/styles'


import { getSpecificClient, getSpecificKey } from '../../DBconn'


import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory 
  } from "react-router-dom";
import KeyBox from './pieces/KeyBox';
import { GridColumn, GridRow } from 'emotion-flex-grid';
// import { List } from '@material-ui/core'


const getClient = (id) => {
    const NameLess = async(id)=>{
        const aux = await getSpecificClient(id)
        // console.log(aux)
        return aux[0]
    }
    return NameLess(id)
}

const getKey = (id) => {
    const NameLess = async(id)=>{
        const aux = await getSpecificKey(id)
        // console.log(aux)
        return aux[0]
    }
    return NameLess(id)
}

function MaineRecScreen() {
    const C = useStyles()

    const [screen, setScreen] = useState('scanner')

    const [client, setClient] = useState(0) 

    const [key, setKey] = useState({id:0})


    const scannedSomething = (scanText) => {
        console.log(scanText)
        if(scanText.substr(0,2) == 'LK'){
            console.log('key sncaed')
            getKey(scanText.substr(2,2)).then(
                ret=>{console.log(ret) 
                    setKey(ret)}
                )
        } else {
            // getClient(scanText.substr(scanText.length - 1)).then(
            getClient(1).then(
                ret=>{setClient(ret)}
                )
        }
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>

            <GridRow>
                <GridColumn >
                    <div className = {C.scanner}>
                        <Scanner upScanned={scannedSomething} 
                            image={loading} 
                            />
                    </div>
                </GridColumn>

                <GridColumn >
                    <KeyBox crtKey = {key}/>
                </GridColumn>
                
                <GridColumn >
                    <ClientIn client = {client}/><br/>
                </GridColumn>
            </GridRow>
            
            <Keys/>
            {/* {ScreenPick()} */}

        </div>
    )
}

const useStyles = makeStyles({

    orangeShadow: {
        boxShadow: '7px 9px 19px -1px rgb(255, 173, 51)',
    },

    scanner:{
        height: 500,
        width:  500,

    },

  }); 

export default MaineRecScreen



{/* <Router>
<Scanner upScanned={scannedSomething}/>
<Keys />
<br/><br/><br/>

<Switch>
    <Route path={`${path}/:clientId`}>
        
        <br/><br/><br/>
        <ClientIn />
    </Route>

    <Route path={`${path}/checkin/:clientId`}>
        <Redirect to="/checkin/:clientId" />
        <br/><br/><br/>
        <ClientIn />
    </Route>

    <Route path={path}>
        <Scanner upScanned={scannedSomething} image={Capture}/>
        <Keys />
        <Button onClick = {()=>scannedSomething('1')}>dab</Button>
    </Route>
</Switch>



<br/>
<br/>
<br/>
</Router> */}