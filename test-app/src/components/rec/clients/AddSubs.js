import React from 'react'
import { List, Datagrid, TextField, DateField, BooleanField, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
import { SubsList, SubsEdit, SubsCreate, PostIcon } from './subscriptions'
import simpleRestProvider from 'ra-data-simple-rest'
import { Button } from '@material-ui/core';


const dataProvider = jsonServerProvider('http://localhost:3001')


function AddSubs() {
    return (
        <Admin dataProvider ={dataProvider}>
            
            <Resource name="subs" list={SubsList} edit={SubsEdit} create={SubsCreate} icon={PostIcon}/>

            <Button
                onClick={()=>trye()}
            >
                 asdasdsad
            </Button>


        </Admin>
    )
}

export default AddSubs
