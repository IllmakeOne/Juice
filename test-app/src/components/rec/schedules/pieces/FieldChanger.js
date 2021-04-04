import React from 'react'

import Button from '@material-ui/core/Button'
import {  GridColumn, GridRow } from 'emotion-flex-grid'

function FieldChanger({changeField}) {

    
    const changeCrtField = (field) => {
        changeField(field)
    }

    return (
        <GridRow >
            {fields.map( el => {
                      return (
                          <GridColumn>
                              <Button
                                  variant="outlined"
                                  style={{margin: 15, padding: 10}}
                                  onClick={()=>changeCrtField(el)}
                                  >
                                  {el}
                              </Button>
                          </GridColumn>
                      )
                  })}
        </GridRow>
    )
}

const fields = ['Hall', 'OutDoor', 'Tennis', 'Aerobic']

export default FieldChanger
