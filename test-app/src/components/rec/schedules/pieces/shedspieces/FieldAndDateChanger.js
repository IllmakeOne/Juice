import React from 'react'
import DateChanger from '../DateChanger'
import FieldChanger from '../FieldChanger'
import { GridRow, GridColumn } from 'emotion-flex-grid'

function FieldAndDateChanger({chageField,weekMutiplier,setWeekMutiplier,today,changeToday}) {
    return (
        <GridRow style={{margin: 20}}>
            <FieldChanger 
                changeField = {chageField}
                />
                
            <GridColumn offset ={6}>
                <DateChanger 
                    weekMutiplier = {weekMutiplier}
                    changeDateMultiplier = {setWeekMutiplier}
                    today = {today}
                    settoday = {changeToday}
                    // settodaypicker = {settodaypicker}
                    />
            </GridColumn>
        </GridRow>
    )
}

export default FieldAndDateChanger
