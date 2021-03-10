import React from 'react'
import { List, Datagrid, TextField, DateField, BooleanField, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'
import { ClientsList, ClientEdit, ClientCreate, PostIcon } from './clients'
import simpleRestProvider from 'ra-data-simple-rest'
import { Button } from '@material-ui/core';



export const nope = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
);

const dataProvider = jsonServerProvider('http://localhost:3001');

const trye = () =>{
dataProvider
    .getOne('clients', { id: 1 })
    .then(response => {
        console.log(response.data); // { id: 123, title: "hello, world" }
    });
}

function AddProfile() {
    return (
        <Admin dataProvider ={dataProvider}>
            
            <Resource name="clients" list={ClientsList} edit={ClientEdit} create={ClientCreate} icon={PostIcon}/>

            <Button
                onClick={()=>trye()}
            >
                 asdasdsad
            </Button>


        </Admin>
    )
}

export default AddProfile
