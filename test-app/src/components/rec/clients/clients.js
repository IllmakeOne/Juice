import {    List, 
            Datagrid, 
            Edit, 
            Create, 
            SimpleForm, 
            DateField, 
            TextField, 
            EditButton, 
            TextInput, 
            Show, 
            SimpleShowLayout,
             RichTextField,
            DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
import { Button } from '@material-ui/core';
import { FiCheck, FiPlusSquare, FiTrash } from "react-icons/fi"
export const PostIcon = BookIcon;



const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const AddSub = (props) =>{
    return (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput label="Current Subscription" source="crtsub" />
            <TextInput source="comment" />
            {/* <DateInput label="Publication date" source="published_at" /> */}
            {/* <TextInput source="average_note" /> */}
        </SimpleForm>
    </Edit>
)
 }

 export const ClientShow = (props) => (
    <Show {...props} show=''>
        <SimpleShowLayout>
            <TextField label="Current Subscription Type "  source="crtsub.type" />
            <DateField label="End Date"  source="crtsub.end" />
            <TextField source="comment" />
        </SimpleShowLayout>
    </Show>
)

export const ClientEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="email" />
            {/* <TextInput label="Current Subscription" source="crtsub" /> */}
            <TextInput source="comment" />
            {/* <DateInput label="Publication date" source="published_at" /> */}
            {/* <TextInput source="average_note" /> */}
        </SimpleForm>
    </Edit>
)

export const ClientCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput required source="name" />
            <TextInput required source="phone" />
            <TextInput source="email" />
            {/* <TextInput label="Current Subscription" source="crtsub" /> */}
            <TextInput source="comment" />
        </SimpleForm>
    </Create>
)

export const ClientsList = (props) => (
    <List {...props}>
        <Datagrid expand={ClientShow}>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField label="Current Subscription"  source="crtsub.type" />
            <div><Button
                startIcon={<FiPlusSquare/>}
                >
            </Button></div>
            <TextField source="comment" />
            {/* <EditButton basePath="/clients" /> */}
        </Datagrid>
    </List>
)

export const ClientShowSpecific = (props) => (
    <Show {...props} show=''>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="teaser" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="email" />
            <TextField label="Current Subscription"  source="crtsub" />
            <TextField source="comment" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);