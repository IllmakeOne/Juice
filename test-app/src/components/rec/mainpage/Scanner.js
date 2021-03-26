import { useState } from 'react'
import Input from '@material-ui/core/Input'

import useKeypress from './keypress'

import { css }  from '@emotion/css'

function Scanner() {

    const [scanned, setScanned] = useState('')

    // useKeypress('L', () => {
    //     alert('you pressed E!')
    // });


    
    const handleScan = (value) => {
        setScanned(value)
    }

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
                {/* <TextField 
                    label="Standard"    
                    value={scanned}
                    // onChange={handleScan}   
                  /> */}

                
            <form  noValidate autoComplete="off">
            <div >
                <label>Scanner</label>
                <input
                    type='text'
                    placeholder='scanner'
                    value={scanned}
                    onChange={(e) => handleScan(e.target.value)}
                    className={css`
                    background: red;
                    width: 1000px;
                    height: 1000px;
                `}/>
            </div>
            </form>
        </div>
    )
}

export default Scanner
