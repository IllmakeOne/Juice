import { useState, useEffect} from 'react'

import Scanner from './Scanner'

import { switchKeyAssignment } from '../../DBconn'
import Keys from '../clients/Keys'


function MaineRecScreen() {

    const scannedSomething = (scanText) => {
        console.log(scanText)
        switch(scanText.substring(0,2)) {
            case 'LK':
                console.log('LK')
                break

        }
    }


    return (
        <div>
            <Scanner upScanned={scannedSomething}/>
            <Keys />
        </div>
    )
}

export default MaineRecScreen
